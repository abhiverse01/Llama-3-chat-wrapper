# api/inference.py

import os
import requests
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B"
headers = {"Authorization": f"Bearer {os.getenv('HUGGINGFACE_API_TOKEN')}"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    response.raise_for_status()
    print(response.json())  # Log the response for debugging
    return response.json()

@app.route('/inference', methods=['POST'])
def handler():
    body = request.json
    inputs = body.get("inputs", "")
    result = query({"inputs": inputs})
    return jsonify(result)

if __name__ == '__main__':
    app.run()
