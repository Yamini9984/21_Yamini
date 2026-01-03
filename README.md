## Medication Reminder Chatbot (Label-Aware)

Medication misuse often occurs due to misunderstanding of complex drug labels, incorrect dosage schedules, and lack of timely reminders. Although official drug label information is publicly available, it is not easily accessible or understandable for common users in a question-answering format.
The objective of this project is to design and develop a Label-Aware Medication Reminder Chatbot that performs question answering over official drug labels and generates sample medication reminder schedules. The chatbot uses Retrieval-Augmented Generation (RAG) to retrieve accurate information from authoritative drug label data and respond to user queries in natural language.
The system takes drug-related questions as input and retrieves relevant information from the openFDA drug label dataset, including indications, dosage, warnings, and precautions. Based on the retrieved dosage information, the chatbot also produces a structured reminder plan in JSON format for educational demonstration purposes.
The solution does not integrate phone calls or SMS notifications and is intended strictly for educational and research use, ensuring safety by avoiding diagnosis or prescription decisions.

## Architecture
- Data: openFDA-style drug label JSON (sample provided) stored in app/data/sample_labels.json.
- Ingestion & Chunking: Load JSON labels, normalize sections (dosage_and_administration, warnings, contraindications, adverse_reactions, drug_interactions, information_for_patients), chunk with RecursiveCharacterTextSplitter.
- Embeddings & Vector Store: OpenAI embeddings stored in a persistent ChromaDB collection.
- RAG Chain: Retrieves label chunks relevant to the query and instructs the LLM to answer strictly from the retrieved context, producing JSON with fields {answer, sources, reminder_plan}.
- API: FastAPI endpoint POST /ask_drug with body {question: string} returning the structured output.
- Safety: Grounded prompting eliminates off-label hallucinations; includes safety disclaimer and explicit handling when information is missing.

## Project Structure
- app/config.py: Configuration and environment handling.
- app/data/sample_labels.json: Sample openFDA-like labels for Metformin and Ibuprofen.
- app/rag/loader.py: Load and normalize labels.
- app/rag/chunker.py: Create LangChain Documents with metadata and chunk text.
- app/rag/embed_store.py: Build/load ChromaDB vector store using OpenAI embeddings.
- app/rag/prompts.py: Grounded prompt that enforces citation and JSON-only output.
- app/rag/chain.py: MedicationRAG with ask_drug(question) -> {answer, sources, reminder_plan}.
- app/api/main.py: FastAPI server exposing /ask_drug.
- app/cli.py: CLI for local testing.
- tests/test_sample_queries.py: Example test queries.

## Setup
1) Ensure Python 3.10+
2) Install dependencies:
   - Windows PowerShell:
     - python -m venv .venv
     - .\.venv\Scripts\Activate.ps1
     - pip install -r requirements.txt
3) Set environment variables:
   - $env:OPENAI_API_KEY = "YOUR_KEY"
   - Optional:
     - $env:OPENAI_MODEL = "gpt-4o-mini"
     - $env:OPENAI_EMBEDDING_MODEL = "text-embedding-3-small"
     - $env:CHROMA_DIR = "<absolute_path>" (default: app/data/chroma)
     - $env:LABELS_JSON = "<absolute_path>" (default: app/data/sample_labels.json)
4) First run builds the index automatically.

## Run (FastAPI)
- uvicorn app.api.main:app --reload
- POST http://127.0.0.1:8000/ask_drug with JSON body:
  {
    "question": "How should I take Metformin 500mg daily?"
  }

## Run (CLI)
- python -m app.cli "How should I take Metformin 500mg daily?"

## Sample Output (abbreviated)
{
  "answer": "Take metformin 500 mg orally once daily with the evening meal ...",
  "sources": [
    "metformin_label_1 - dosage_and_administration",
    "metformin_label_1 - warnings"
  ],
  "reminder_plan": {
    "drug_name": "Metformin Hydrochloride",
    "dosage": "500 mg once daily",
    "frequency": "daily",
    "timing": ["with evening meal"],
    "duration": "as directed (label does not specify fixed course)",
    "warnings": ["Risk of lactic acidosis ...", "Monitor renal function ..."]
  }
}

## RAG Flow
1) Load and chunk label sections (with section metadata).
2) Embed chunks and store in ChromaDB.
3) Retrieve top-k chunks for the question.
4) Prompt LLM with strict instructions:
   - Only use retrieved content.
   - Provide citations by label id and section.
   - Return JSON only.
   - If info is missing, say so.
5) Parse JSON and return to client.

## Why healthcare-safe
- Answers strictly grounded in official label sections.
- Explicit constraints prevent off-label or speculative guidance.
- Safety disclaimer included in every response.
- Sources returned for auditability.
- Structured reminder plan ties to label content (dosage, timing, warnings, missed dose, contraindications, interactions).

## Notes
- The provided sample labels are for demonstration. For production, ingest the full openFDA drug label dataset JSON and rebuild the index.
- No phone/SMS integration; reminder plan is returned as JSON only.

