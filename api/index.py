from flask import Flask, jsonify
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase: Client = create_client(url, key)

app = Flask(__name__)

@app.route('/api/hello', methods=['GET'])
def hello_world():
    response = supabase.table("notes").select("*").execute()
    return response.data

@app.route('/api/nodes', methods=['GET'])
def get_nodes():
    response = supabase.table("nodes").select("*").execute()
    return jsonify(response.data)

if __name__ == '__main__':
    app.run(port=5328)
