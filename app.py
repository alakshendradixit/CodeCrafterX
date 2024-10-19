from flask import Flask,request, render_template 
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
contents =[]
app.config['SQLACHEMY_DATABASE_URI']='squlite://data.db'
db =SQLAlchemy(app)

class Content(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(100),nullable=False)
    body=db.Column(db.Text,nullable=False)
    
    @app.route('/')
    def index(): 
        contents=Content.query.all()
        return 
    render_template('index.html',contents=contents)
    
    @app.route('/add',methods=['POST']) 
    def add_content():
        title=request.form['title']
        body=request.form['body']
        new_content=Content(title=title, body=body)
        db.session.add(new_content)
        db.session.commit()
        return 'Content added succesfully!'  
    
    if __name__=="__main__":db.create_all() 
    app.run(debug=True)
    