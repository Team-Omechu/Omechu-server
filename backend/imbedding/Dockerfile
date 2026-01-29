FROM jungralph/omechu-embed-base:xlmr-100langs-v1

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

ENV HF_HOME=/opt/hf_cache

COPY imbedding.py .
COPY menu_data.json .

EXPOSE 5001

CMD ["uvicorn", "imbedding:app", "--host", "0.0.0.0", "--port", "5001"]