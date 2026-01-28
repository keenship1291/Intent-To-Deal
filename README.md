# Intent-to-Deal Engine - Mock Backend

This is a backend implementation of the Intent-to-Deal Engine Project.
It uses Express.js and fully mocked services to demonstrate the end-to-end flow.

## 🚀 How to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Server**
   ```bash
   npm start
   ```
   Server runs on `http://localhost:3000`.

## 🧪 End-to-End Test Flow (Curl / Postman)

Run these requests in order (or pass the output of one as input to the next).

### 1. Website Visit (Intent Capture)
Simulate a visitor on your pricing page.

```bash
curl -X POST http://localhost:3000/intent/visit \
  -H "Content-Type: application/json" \
  -d '{"ip": "127.0.0.1", "page": "https://mysite.com/pricing", "timestamp": "2024-01-28T10:00:00Z"}'
```
**Returns:** `company_name` (e.g., "Acme Corp") and `intent_score` (e.g., 85).

### 2. Company Enrichment
Get details about the company found in Step 1.

```bash
curl -X POST http://localhost:3000/enrichment/company \
  -H "Content-Type: application/json" \
  -d '{"company_name": "Acme Corp"}'
```
**Returns:** Industry, size, and mocked decision maker.

### 3. Run Research
Generate mocked insights based on the profile.

```bash
curl -X POST http://localhost:3000/research/run \
  -H "Content-Type: application/json" \
  -d '{
    "company_name": "Acme Corp", 
    "industry": "SaaS", 
    "company_size": "100-500 employees"
  }'
```
**Returns:** Pain points, recent news, opportunities.

### 4. Generate Deck
Create a mocked slide deck from the research.

```bash
curl -X POST http://localhost:3000/deck/generate \
  -H "Content-Type: application/json" \
  -d '{
    "company_name": "Acme Corp", 
    "findings": {
        "pain_points": ["Inefficiency"], 
        "opportunities": ["Automation"]
    }
  }'
```
**Returns:** List of slides and a `deck_id`.

### 5. Send Outbound Email
Simulate sending the deck to the decision maker.

```bash
  curl -X POST http://localhost:3000/outbound/send \
    -H "Content-Type: application/json" \
    -d '{
      "deck": {"deck_id": "deck_123", "company_name": "Acme Corp"},
      "contact": {"email": "wile@acmecorp.demo"}
    }'
```
**Returns:** `{ "status": "sent" }`

---

## 🛠️ Project Structure

- **app.js**: Main entry point.
- **routes/**: API Controllers.
- **services/**: Mocked business logic.

## 💡 Demo Tip
You can walk through the entire flow in Postman by executing the endpoints in order using the sample payloads above.