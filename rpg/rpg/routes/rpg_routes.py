from flask import request, render_template, jsonify
from rpg import app
import string
import secrets


@app.route('/')
def pwgen():
    return render_template(
        'rpg/rpg.html',
        title="RPG | Random Password Generator"
    )


@app.route('/generate-password', methods=['POST'])
def generate_password():
    character_list = ''
    punctuation = '~!@#$%^&*()_+=-][{}|;:/?.>,<'

    try:
        if request.form['uppercase']:
            character_list = f'{character_list}{string.ascii_uppercase}'
    
    except KeyError:
        pass

    try:
        if request.form['lowercase']:
            character_list = f'{character_list}{string.ascii_lowercase}'
    
    except KeyError:
        pass

    try:
        if request.form['digits']:
            character_list = f'{character_list}{string.digits}'
    
    except KeyError:
        pass

    try:
        if request.form['punctuation']:
            character_list = f'{character_list}{punctuation}'
    
    except KeyError:
        pass

    try:
        password_length = request.form['pw_length']
    
    except KeyError:
        return jsonify(dict(
            status='zeroLengthError'
        ))

    if not character_list:
        return jsonify(dict(
            status='zeroCharError'
        ))

    new_password = ''

    for i in range(int(password_length)):
        new_password = f'{new_password}{secrets.choice(character_list)}'

    new_password = new_password.replace('<', '&lt;')
    new_password = new_password.replace('>', '&gt;')

    return jsonify(
        {
            'status': 'success',
            'new_password': new_password
        }
    )