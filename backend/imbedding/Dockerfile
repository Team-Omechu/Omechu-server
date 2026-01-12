FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY imbedding.py .
COPY menu_data.json .

EXPOSE 5001

CMD ["uvicorn", "imbedding:app", "--host", "0.0.0.0", "--port", "5001"]
