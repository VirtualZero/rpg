# RPG (Random Password Generator)
Powered by [Virtualzero](https://virtualzero.net)

RPG is a Flask web application used to create strong, secure passwords. RPG leverages the Python secrets module to generate cryptographically strong, random strings suitable for passwords, user authentication, and security tokens.

#### Installation
Clone the repository:
```bash
git clone https://github.com/VirtualZero/rpg.git
```

#### Environment

Install Miniconda
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
```

```bash
chmod +x Miniconda3-latest-Linux-x86_64.sh
```

```bash
./Miniconda3-latest-Linux-x86_64.sh
```

Create Environment
```bash
conda create --name 'rpg' python=3.7
```

Activate Environment
```bash
source activate rpg
```

Install Dependencies
```bash
cd rpg && pip install -r requirements.txt
```

#### Execution
It is bad practice to store passwords in applications. For this reason, sensitive information like account passwords, secret keys, and API keys are stored in environment variables. For simplicity, use the included bash sciprt, env.sh, to create the environment variables before executing the application. With the 'rpg' virtual environment activated, update env.sh with a secure password and execute the following command:

```bash
chmod +x env.sh && . env.sh
```
To run RPG on your local machine, make sure the 'rpg' virtual environment is activated and that you are in the root rpg directory. Enter the following command to start the app:

```bash
python run.py
```

Then, open a browser and go to the following URL:

```bash
http://127.0.0.1:5000
```

To use RPG in a production environment, it is recommended to deploy the app using Gunicorn and Nginx. An example Nginx host file is included, as well as an example systemd service file.
