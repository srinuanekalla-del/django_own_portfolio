Own Portfolio Website

A personal portfolio website built using Python and Django to showcase my skills, projects, experience, and resume.

🚀 Features

- Home page with personal introduction
- About Me section
- Technical Skills section
- Projects section
- Resume download
- Contact form
- Responsive design
- Django backend
- HTML, CSS and JavaScript frontend

🛠️ Technologies Used

Backend

- Python
- Django
- Django REST Framework

Frontend

- HTML5
- CSS3
- JavaScript

Database

- MySQL / SQLite

Tools

- Git
- GitHub
- VS Code

📁 Project Structure

django_portfolio_project/
│
├── backend/
│   ├── manage.py
│   │
│   ├── portfolio/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   │
│   ├── portfolio_app/
│   │   ├── migrations/
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── urls.py
│   │   ├── views.py
│   │   └── tests.py
│   │
│   ├── templates/
│   │   └── index.html
│   │
│   └── static/
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   └── script.js
│       ├── images/
│       │   └── profile.jpg
│       └── files/
│           └── resume.pdf
│
├── .gitignore
└── README.md

⚙️ Installation and Setup

1. Clone the repository

git clone <your-github-repository-url>

2. Go to the project directory

cd django_portfolio_project

3. Create a virtual environment

python -m venv venv

4. Activate the virtual environment

For Windows:

venv\Scripts\activate

5. Install dependencies

pip install -r requirements.txt

6. Go to the backend directory

cd backend

7. Apply migrations 

python manage.py migrate

8. Start the Django development server
a) set DEBUG=True
b) python manage.py runserver

Open the website in your browser:

http://127.0.0.1:8000/

👨‍💻 Author

Srinivasula Reddy

Backend Developer

Skills

- Python
- Django
- REST API
- MySQL
- SQL
- HTML
- CSS
- JavaScript
- Git & GitHub

