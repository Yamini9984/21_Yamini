# Label-Aware Medication Reminder Chatbot (RAG-Based)

A modern healthcare-style web application that answers medicine-related questions using official drug labels and generates safe medication reminder plans.  
The system uses Retrieval-Augmented Generation (RAG) to ensure responses are accurate, reliable, and non-hallucinatory.

This project is strictly for educational and research purposes and does not replace professional medical advice.

---

## Problem Statement

Medication misuse often occurs due to:
- Misunderstanding of complex drug labels  
- Incorrect dosage schedules  
- Lack of clear reminders  

Although official drug label information is publicly available, it is not easily understandable for common users.  
This project aims to bridge that gap using AI and user-friendly UI/UX design.

---

## Project Objectives

- Provide accurate medicine information from official drug labels  
- Avoid AI hallucinations using RAG architecture  
- Generate structured medication reminder plans  
- Present information through a clean, modern, multi-page UI  
- Ensure healthcare safety and ethical AI usage  

---

## What is RAG?

Retrieval-Augmented Generation (RAG) is an AI approach where:
1. Relevant documents are retrieved from a trusted data source  
2. The retrieved content is passed to a large language model  
3. The model generates answers strictly based on the retrieved data  

This ensures accuracy, safety, and transparency, especially in healthcare applications.

---

## System Architecture

User Question
↓
Frontend (HTML, CSS, JavaScript)
↓
FastAPI Backend
↓
RAG Pipeline (LangChain)
↓
Vector Search (ChromaDB)
↓
Official Drug Label Data
↓
Grounded Response and Reminder Plan
## Depolyment Link :https://v0-healthcare-web-app-blush.vercel.app/
