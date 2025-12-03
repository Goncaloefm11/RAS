from fastapi import FastAPI, UploadFile, File
import uuid
import os

from utils.expand_model import expand_image
from utils.minio_client import upload_image

app = FastAPI()

UPLOAD_FOLDER = "/app/tmp/"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.post("/expand")
async def generative_expand(file: UploadFile = File(...)):
    ext = file.filename.split(".")[-1]
    input_path = f"{UPLOAD_FOLDER}{uuid.uuid4()}.{ext}"
    output_path = f"{UPLOAD_FOLDER}{uuid.uuid4()}.{ext}"

    # Guardar ficheiro temporário
    with open(input_path, "wb") as f:
        f.write(await file.read())

    # Fazer expansão
    expand_image(input_path, output_path)

    # Guardar no MinIO
    output_name = f"expanded/{uuid.uuid4()}.{ext}"
    upload_image(output_path, output_name)

    return {
        "status": "success",
        "output_file": output_name
    }
