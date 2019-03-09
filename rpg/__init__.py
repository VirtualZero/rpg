from flask import Flask
from flask_wtf.csrf import CSRFProtect
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['APP_SECRET_KEY']
csrf = CSRFProtect(app)

from rpg.rpg.routes import rpg_routes