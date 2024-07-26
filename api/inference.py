import os
import requests
import json

API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B"
headers = {"Authorization": f"Bearer {os.getenv('HUGGINGFACE_API_TOKEN')}"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    response.raise_for_status()
    print(response.json())  # Log the response for debugging
    return response.json()

def handler(request):
    body = json.loads(request.body)
    inputs = body.get("inputs", "")
    result = query({"inputs": inputs})
    return {
        "statusCode": 200,
        "body": json.dumps(result)
    }
