import os
from flask import Flask, url_for, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# @app.route("/settings")
# def settings():
#     return {"users": ["IP Address", "Port", "Room"]}

def LoadJson():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, 'static', 'db.json')
    data = json.load(open(json_url))
    return data

@app.route("/environments")
def GetEnvironmentData():
    return LoadJson()["environments"]

@app.route("/environments/<id>")
def GetEnvironmentDataById(id):
    data = LoadJson()["environments"]
    for enviro in data:
        if (enviro.get('id') == id):
            return enviro
        
    return None
    
if __name__ == "__main__":
    app.run(debug = True, port=8000)