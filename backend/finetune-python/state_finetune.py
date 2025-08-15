from openai import OpenAI
client=OpenAI()
job_id="ftjob-9DlJ7oz05Vl9bIeoCRgMvOMt"
status=client.fine_tuning.jobs.retrieve(job_id)
print("현 상태",status.status)
print(status.fine_tuned_model)