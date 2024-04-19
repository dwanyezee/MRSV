import os
import uuid
from flask import Flask, url_for, json, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
json_url = os.path.join(SITE_ROOT, 'static', 'db.json')

def LoadJson():
    data = json.load(open(json_url))
    return data

def WriteJson(location, new_data):
    with open(json_url,"r+") as file:
        file_data = json.load(file)
        new_data["id"] = uuid.uuid4()
        file_data[location].append(new_data)
        file.seek(0)
        json.dump(file_data, file, indent = 4)
        

@app.route("/<content>", methods=['GET'])
def GetContentData(content):
    return LoadJson()[content]

@app.route("/<content>/create", methods=['POST'])
def PostPlaylistData(content):
    if request.is_json:
        data = request.json
        WriteJson(content, data)
        return data
    else:
        return "Request Failed"

@app.route("/<content>/<id>")
def GetContentDataById(content, id):
    data = LoadJson()[content]
    for enviro in data:
        if (enviro.get('id') == id):
            return enviro
        
    return None
    
if __name__ == "__main__":
    app.run(debug = True, port=8000)