# api/inference.py

import os
import requests
import json

API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B"
headers = {"Authorization": f"Bearer {os.getenv('HUGGINGFACE_API_TOKEN')}"}

def query(payload):
    try:
        print("Sending request to Hugging Face API with payload:", payload)  # Log the request payload
        response = requests.post(API_URL, headers=headers, json=payload)
        response.raise_for_status()
        print("Received response from Hugging Face API:", response.json())  # Log the response
        return response.json()
    except requests.exceptions.RequestException as e:
        print("Error during Hugging Face API request:", e)
        return {"error": str(e)}

def handler(request):
    try:
        body = json.loads(request.body)
        inputs = body.get("inputs", "")
        if not inputs:
            raise ValueError("No input provided")
        
        result = query({"inputs": inputs})
        
        return {
            "statusCode": 200,
            "body": json.dumps(result)
        }
    except ValueError as ve:
        print("ValueError:", ve)
        return {
            "statusCode": 400,
            "body": json.dumps({"error": str(ve)})
        }
    except Exception as e:
        print("Exception during request handling:", e)
        return {
            "statusCode": 500,
            "body": json.dumps({"error": "Internal server error"})
        }
