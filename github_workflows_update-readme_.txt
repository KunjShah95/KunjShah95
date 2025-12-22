name: Update README with Dynamic Content

on:
  schedule: 
    - cron: "30 0 * * *" # Run daily at 12:30 AM UTC
  workflow_dispatch:
  push:
    branches: 
      - main

jobs: 
  update-readme:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      
      - name: Update timestamp in README
        run: |
          # Get current date and time
          CURRENT_DATE=$(TZ='Asia/Kolkata' date +'%B %d, %Y at %I:%M %p IST')
          
          # Update the last updated line in README
          sed -i "s/\*\*Last Updated: .*\*\*/\*\*Last Updated: ${CURRENT_DATE}\*\*/g" README.md
      
      - name: Get latest repository stats
        id: repo-stats
        run: |
          # Fetch stats using GitHub API
          REPOS=$(curl -s "https://api.github.com/users/KunjShah95/repos? per_page=100" | jq '. | length')
          FOLLOWERS=$(curl -s "https://api.github.com/users/KunjShah95" | jq '. followers')
          FOLLOWING=$(curl -s "https://api.github.com/users/KunjShah95" | jq '.following')
          
          echo "repos=$REPOS" >> $GITHUB_OUTPUT
          echo "followers=$FOLLOWERS" >> $GITHUB_OUTPUT
          echo "following=$FOLLOWING" >> $GITHUB_OUTPUT
      
      - name:  Commit changes
        run: |
          git config --local user.email "github-actions[bot]@users.noreply.github.com"
          git config --local user.name "github-actions[bot]"
          git add README.md
          git diff --quiet && git diff --staged --quiet || (git commit -m "📝 Auto-update README - $(date +'%Y-%m-%d')" && git push)