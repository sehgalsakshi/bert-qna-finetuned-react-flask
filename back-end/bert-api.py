from flask import Flask, request
from flask_cors import CORS, cross_origin
import torch
from bert import QA

__author__ = 'Sakshi Sehgal'

app = Flask(__name__)
CORS(app)

model = torch.load('QA_model.bin')

def qa_func(context, question):
    return model.predict(context, question)["answer"]

@app.route('/fetch_answer/', methods=['POST'])
def fetch_answer():
    try:
        paragraph = request.json['paragraph']
        question = request.json['question']
        return qa_func(paragraph, question)
    except:
        print(e)
        return 'Error proccessing your request', 422
    
if __name__ == '__main__':
    app.run('127.0.0.1',port=5000,debug=False)
