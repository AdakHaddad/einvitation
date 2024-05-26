from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

guestbook = []

@app.route('/api/guestbook', methods=['GET'])
def get_guestbook():
    return jsonify(guestbook)

@app.route('/api/guestbook', methods=['POST'])
def add_entry():
    entry = request.get_json()
    guestbook.append(entry)
    return jsonify(entry), 201

if __name__ == '__main__':
    app.run(port=8080)
