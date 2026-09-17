# 🌐 Own Portfolio Website

A personal portfolio website built using **Python and Django** to showcase my professional profile, technical skills, projects, experience, and resume.

## 🔗 Live Demo

🚀 **Live Website:** https://django-own-portfolio.onrender.com

The application is deployed on **Render** and can be accessed online.

---

## 🚀 Features

* Home page with personal introduction
* About Me section
* Technical Skills section
* Projects section
* Professional experience section
* Resume download
* Contact form
* Responsive design
* Django backend
* HTML, CSS, and JavaScript frontend
* Database integration
* REST API support using Django REST Framework

---

## 🛠️ Technologies Used

### Backend

* Python
* Django
* Django REST Framework

### Frontend

* HTML5
* CSS3
* JavaScript

### Database

* MySQL
* SQLite

### Deployment

* Render

### Development Tools

* Git
* GitHub
* VS Code

---

## 🏗️ Application Architecture

```text
                    User
                      |
                      v
              Portfolio Website
                      |
                      v
             HTML/CSS/JavaScript
                      |
                      v
                  Django
                      |
          +-----------+-----------+
          |           |           |
          v           v           v
       Views        Models       URLs
                      |
                      v
                MySQL / SQLite
```

---

## 📁 Project Structure

```text
django_portfolio_project/
│
├── backend/
│   │
│   ├── manage.py
│   │
│   ├── portfolio/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   │
│   ├── portfolio_app/
│   │   ├── migrations/
│   │   ├── __init__.py
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
│       │
│       ├── js/
│       │   └── script.js
│       │
│       ├── images/
│       │   └── profile.jpg
│       │
│       └── files/
│           └── resume.pdf
│
├── requirements.txt
├── .gitignore
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Go to the project directory

```bash
cd django_portfolio_project
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / macOS

```bash
source venv/bin/activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Go to the backend directory

```bash
cd backend
```

### 7. Apply migrations

```bash
python manage.py migrate
```

### 8. Run the development server

For local development:

```bash
python manage.py runserver
```

Open the application:

```text
http://127.0.0.1:8000/
```

---

## 🗄️ Database

The project supports database integration using:

* SQLite for local development
* MySQL for database-based deployment/development

Django ORM is used to interact with the database.

Database configuration is maintained in:

```text
backend/portfolio/settings.py
```

---

## 🔌 REST API

The project includes Django REST Framework for REST API development.

API endpoints depend on the implementation in:

```text
backend/portfolio_app/urls.py
```

Example API structure:

```text
GET /api/projects/
GET /api/skills/
GET /api/experience/
```

---

## 📄 Resume

The resume is stored in the static files directory:

```text
backend/static/files/resume.pdf
```

Visitors can download the resume directly from the portfolio website.

---

## 🧪 Testing

Django tests can be executed using:

```bash
python manage.py test
```

If Pytest is configured in the project, tests can also be executed using:

```bash
pytest
```

---

## 🚀 Deployment

The portfolio website has been deployed using **Render**.

### Live Application

**https://django-own-portfolio.onrender.com**

The deployed application contains the portfolio frontend and Django backend.

### Production Configuration

For production deployment, the following configurations are important:

* `DEBUG = False`
* `ALLOWED_HOSTS`
* Production secret key
* Environment variables
* Database configuration
* Static file configuration
* HTTPS

Sensitive credentials should not be committed to GitHub.

---

## 🔄 Application Flow

```text
User
  ↓
Open Portfolio Website
  ↓
Home
  ↓
About Me
  ↓
Skills
  ↓
Projects
  ↓
Experience
  ↓
Resume
  ↓
Contact
  ↓
Django Backend
  ↓
Database
```

---

## 🎯 What This Project Demonstrates

This project demonstrates practical knowledge of:

* Python
* Django
* Django REST Framework
* REST API development
* Django ORM
* SQL
* MySQL
* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Backend development
* Frontend and backend integration
* Database integration
* Web deployment

---

## 🔮 Future Improvements

* Add JWT authentication
* Add project search and filtering
* Add blog functionality
* Add PostgreSQL support
* Add email notification for contact messages
* Improve UI animations
* Add Docker support
* Add CI/CD using GitHub Actions
* Improve API documentation

---

## 👨‍💻 Author

**Srinivasula Reddy**

**Backend Developer**

### Technical Skills

* Python
* Django
* Django REST Framework
* REST APIs
* MySQL
* SQL
* HTML
* CSS
* JavaScript
* Git & GitHub

### 🔗 Links

* **Live Portfolio:** https://django-own-portfolio.onrender.com
* **GitHub:** https://github.com/srinuanekalla-del/django_own_portfolio.git
