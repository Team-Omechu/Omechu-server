from openai import OpenAI
client=OpenAI()
f=client.files.create(
    file=open("menu_finetune_2000.jsonl","rb"),
    purpose='fine-tune'
)
print("training_file_id",f.id)
