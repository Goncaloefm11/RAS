from minio import Minio
import os

client = Minio(
    os.getenv("MINIO_ENDPOINT", "minio:9000"),
    access_key=os.getenv("MINIO_ROOT_USER", "minioadmin"),
    secret_key=os.getenv("MINIO_ROOT_PASSWORD", "minioadmin"),
    secure=False
)

BUCKET = "picturas"

def upload_image(file_path: str, output_name: str):
    client.fput_object(BUCKET, output_name, file_path)
    return output_name
