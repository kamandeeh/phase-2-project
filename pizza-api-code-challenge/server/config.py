import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URI", "postgresql://postgres:cate05@localhost:5432/pizza_api_db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
