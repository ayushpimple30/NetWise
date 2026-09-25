# 🌐 NetWise ~ Teaching Internet Basics

A Flask + MySQL learning portal for teaching safe, effective everyday Internet use. Students work through database-backed lessons, track progress, take scored quizzes, and give feedback. Admins manage content and review analytics.

![Python](https://img.shields.io/badge/Python-3-blue)
![Flask](https://img.shields.io/badge/Flask-backend-black)
![MySQL](https://img.shields.io/badge/MySQL-production-orange)
![License](https://img.shields.io/badge/license-see%20LICENSE-green)

---

## ✨ Features

- 📚 6 curriculum areas, 60 lessons, 15 quiz questions per module
- 📈 Progress tracking, quiz scoring, feedback + survey collection
- 🛠️ Admin dashboard w/ Chart.js — module completion, quiz performance, feedback ratings
- 🔐 Role-based access, CSRF protection, hashed passwords, secure cookies

## 🧱 Stack

Python 3 · Flask · SQLAlchemy · Flask-Migrate · Flask-Login · Flask-WTF · MySQL (prod) · SQLite (local) · Bootstrap 5 · Jinja2

## 🚀 Setup

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # set SECRET_KEY and MySQL DATABASE_URL

# create MySQL DB named in URL, or for local SQLite:
# DATABASE_URL=sqlite:///instance/portal.db

flask --app run.py db init
flask --app run.py db migrate -m "initial schema"
flask --app run.py db upgrade

python seed/seed.py
flask --app run.py run
```

## 👤 Dev accounts (development-only!)

| Role    | Email                  | Password       |
|---------|-------------------------|----------------|
| Admin   | admin@netwise.local     | ChangeMe123!   |
| Student | student@netwise.local   | Student123!    |

⚠️ Replace/remove before deployment.

## 🧪 Tests

```bash
pytest
```
Uses isolated SQLite data; CSRF enabled in prod/dev.

## 🔒 Security

Secrets in env vars · Werkzeug password hashes · server-side role checks · CSRF · ORM parameterisation · secure cookies · baseline security headers.

## 📦 Production

```bash
FLASK_ENV=production
```
Set long random `SECRET_KEY`, MySQL `DATABASE_URL`, serve `run:app` (WSGI) behind HTTPS. No seeded dev creds in prod.

## 🗺️ Roadmap

- Email notifications
- Granular admin audit logs
- Content image uploads w/ validation
- Server-generated PDF certificates

## 📄 License

See [LICENSE](LICENSE).
