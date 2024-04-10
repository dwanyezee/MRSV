from flask import Flask

app = Flask(__name__)

@app.route("/settings")
def settings():
    return {"users": ["IP Address", "Port", "Room"]}

if __name__ == "__main__":
    app.run(debug = True, port=8000)