<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0a,100:1a1a2e&height=120&section=header&text=&animation=fadeIn" width="100%"/>

# Kunj Shah

**AI Agent Developer · Developer Tools · LLM Systems**

I build AI-powered tools that ship — not demos, not experiments, real things.  
Currently building [AgentForge](https://github.com/KunjShah95), a memory-driven career operating system.  
Author of [`sentinel-cli`](https://www.npmjs.com/package/sentinel-cli) — local-first AI code reviewer on npm.

`Ahmedabad, India` · `Open to roles & freelance` · `4th Year CS @ Indus University`

</div>

---

## About Me

I got tired of building chatbots. So I started building tools that actually do things.

Most of my work lives at the intersection of LLMs and developer workflows — code reviewers, agent pipelines, memory systems. I care about tools that work offline, respect your data, and don't need a SaaS subscription to be useful.

Right now I'm deep in:
- Multi-agent orchestration with LangGraph
- Memory architectures for long-running AI systems
- MCP (Model Context Protocol) and what it changes for agent tooling
- LLM evaluation — because "it feels right" isn't a metric

My development philosophy: ship first, refine second, don't tutorial-grind. The best way to understand a system is to break one.

---

## Tech Stack

**Languages**
`Python` `TypeScript` `JavaScript` `SQL` `Bun`

**Frontend**
`React` `Next.js` `Tailwind CSS`

**Backend**
`FastAPI` `Node.js` `PostgreSQL` `Redis`

**AI/ML**
`LangChain` `LangGraph` `OpenAI SDK` `Anthropic SDK` `HuggingFace Transformers` `CrewAI`

**Vector Databases**
`Pinecone` `ChromaDB` `FAISS` `Weaviate`

**Cloud & DevOps**
`Docker` `Kubernetes` `GitHub Actions` `Vercel` `Google Cloud`

**APIs & Integrations**
`OpenAI` `Anthropic Claude` `Groq` `Gemini` `OpenRouter`

---

## Currently Building

### 🧭 AgentForge Career OS
A memory-driven autonomous career operating system. Not another job board wrapper — a multi-agent system that tracks your career trajectory, surfaces opportunities, preps you for interviews, and remembers everything across sessions.

**Why it matters:** Most career tools treat you as a static resume. AgentForge treats your career as a stateful, evolving system.

**Stack:** Next.js · FastAPI · LangGraph · PostgreSQL · Pinecone · Anthropic Claude

**Status:** Architecture phase. Backend scaffolding in progress.

---

### 🧠 Neuron OS
A terminal-first AI agent orchestration system. Think of it as an OS layer for running, managing, and chaining AI agents from the command line — built for developers who live in the terminal.

**Why it matters:** Most agent frameworks are GUI-first or notebook-first. Neuron OS is built for composability, piping agents like Unix commands.

**Stack:** TypeScript · Bun · LangGraph · MCP

**Status:** Active development. [→ Repository](https://github.com/KunjShah95/neuron-os)

---

## Featured Projects

### sentinel-cli · AI-Powered Code Guardian

> Your codebase, reviewed locally. No SaaS. No data leaks. Your keys, your rules.

**Problem:** Existing code review tools are either cloud-dependent, expensive, or shallow.

**Solution:** A local-first CLI with 13+ specialized analyzers covering security, accessibility, TypeScript strictness, React patterns, and dependency vulnerabilities. Plugs into any LLM (OpenAI, Claude, Groq, Gemini).

**Stack:** Node.js · TypeScript · Multi-LLM APIs · Docker

**Key Features:**
- SQL injection, XSS, secrets detection
- WCAG 2.1 accessibility checks
- GitHub PR integration via CLI
- SARIF output for GitHub Security tab
- Auto-fix for common issues
- Works 100% offline for static analysis

[→ Repository](https://github.com/KunjShah95/SENTINEL-CLI) · [→ npm Package](https://www.npmjs.com/package/sentinel-cli)

---

### BUILDING-MY-OWN-VECTOR-DB · Vector Database from Scratch

> Nine ANN algorithms. Hand-rolled. No shortcuts.

**Problem:** Most developers use vector DBs as black boxes. I wanted to understand what's actually happening inside.

**Solution:** A production-grade vector database built from scratch in Python featuring nine hand-rolled ANN algorithms (HNSW, IVF, PQ, LSH, and more), a full RAG pipeline, multimodal ingestion, FastAPI server, and Kubernetes deployment configs.

**Stack:** Python · FastAPI · NumPy · Docker · Kubernetes

**Key Features:**
- 9 ANN algorithms implemented from scratch
- RAG pipeline with multimodal support
- REST API via FastAPI
- K8s deployment configs for production
- Benchmarking suite across algorithms

[→ Repository](https://github.com/KunjShah95/BUILDING-MY-OWN-VECTOR-DB)

---

### AETHER-AI · Autonomous Agent Framework

> A framework for agents that plan, not just respond.

**Problem:** LangChain is powerful but complex. Most teams need a simpler, opinionated wrapper to build reliable agents fast.

**Solution:** Modular agent framework with built-in tool integration, state monitoring, and persistent memory. REST API included for deployment.

**Stack:** Python · LangChain · OpenAI GPT-4 · FastAPI · PostgreSQL

[→ Repository](https://github.com/KunjShah95/AETHER-AI)

---

### Sanskrit Tokenizer · Language Preservation via AI

> Ancient script. Modern tokenization. BPE from scratch.

**Problem:** Sanskrit is morphologically complex. No production-grade tokenizer existed for GPT fine-tuning workflows.

**Solution:** Custom BPE tokenizer built from scratch. Fine-tuning pipeline for GPT-3.5/4 on Devanagari text. Multilingual support across Sanskrit, Hindi, English.

**Stack:** Python · PyTorch · Transformers · OpenAI API

[→ Repository](https://github.com/KunjShah95/TOKENIZER-FROM-SCRATCH)

---

### job-sniper · AI Resume-Job Matching Agent

> Stop applying blindly. Know your fit score before you apply.

**Problem:** Job seekers waste hours applying to roles they're underqualified or overqualified for.

**Solution:** An intelligent agent that parses resumes with NER, semantically matches them to job descriptions, surfaces skills gaps, and gives ATS optimization suggestions.

**Stack:** Python · spaCy · Transformers · FastAPI · React · PostgreSQL

[→ Repository](https://github.com/KunjShah95/job-snipper)

---

### gapminer · Skills Gap Analysis Engine

> What's standing between you and your target role?

**Problem:** Developers don't know which skills to prioritize for career growth.

**Solution:** TypeScript-based skills gap analyzer that maps your current skills against target job requirements and surfaces the highest-ROI things to learn next.

**Stack:** TypeScript · Node.js · LLM APIs

[→ Repository](https://github.com/KunjShah95/gapminer)

---

### promptvault.dev · Prompt Management for Teams `🚧 In Development`

> Because good prompts deserve version control.

**Stack:** TypeScript · React · Node.js

[→ Repository](https://github.com/KunjShah95/promptvault.dev)

---



---

## Learning Journey

| Topic | Status |
|---|---|
| LangGraph stateful agents | Active |
| MCP (Model Context Protocol) | Active |
| Agent memory architectures | Active |
| LLM evaluation frameworks | Active |
| Multi-agent coordination patterns | Active |
| RAG pipeline optimization | Ongoing |
| Vector DB internals | Shipped ✅ |
| Distributed systems fundamentals | Ongoing |

---

## GitHub Philosophy

I push when things work, not when they're perfect. Readmes matter. Tests matter more. If a project has no README, it might as well not exist.

I prefer small, focused repos over monorepo sprawl. I'd rather have five sharp tools than one giant project that tries to do everything.

Commits tell a story — I try to make them readable.

---

## Let's Connect

| | |
|---|---|
| 🌐 Portfolio | [kunjshah.vercel.app](https://kunjs-portfolio-website.vercel.app/) |
| 💼 LinkedIn | [linkedin.com/in/kunjshah05](https://www.linkedin.com/in/kunjshah05) |
| 📧 Email | kunjkshahdeveloper@gmail.com |
| 🐦 X / Twitter | [@kunjshah_dev](https://x.com/kunjshah_dev) |
| 📄 Resume | _[link placeholder]_ |

Always happy to connect with builders, founders, and curious developers.

If you're working on something in AI tooling, agent systems, or developer productivity — reach out.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,100:0a0a0a&height=80&section=footer" width="100%"/>

</div>
