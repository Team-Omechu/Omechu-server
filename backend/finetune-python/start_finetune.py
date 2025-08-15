from openai import OpenAI
client=OpenAI()
BASE_MODEL="gpt-4o-mini-2024-07-18"
TRAINING_FILE_ID="file-JZzTfcZuysHVCX6ayQ1Nhx"
job=client.fine_tuning.jobs.create(
    model=BASE_MODEL,
    training_file=TRAINING_FILE_ID,
    hyperparameters={"n_epochs":3}
)
print("job_id",job.id,"status",job.status)