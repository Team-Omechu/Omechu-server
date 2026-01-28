FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

ENV HF_HOME=/app/hf_cache
RUN python -c "from sentence_transformers import SentenceTransformer; SentenceTransformer('sentence-transformers/xlm-r-100langs-bert-base-nli-stsb-mean-tokens')"

COPY imbedding.py .
COPY menu_data.json .

EXPOSE 5001

CMD ["uvicorn", "imbedding:app", "--host", "0.0.0.0", "--port", "5001"]
