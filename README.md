<<<<<<< HEAD
<<<<<<< HEAD
# 🌱 goGreen

With **goGreen**, you can make your profile look like you've been hard at work... even if you haven't. 
NodeJs script to make commits to the past (or the future) to go green on GitHub.

## About

**goGreen** helps you create commits on your GitHub profile for any date in the past. Whether you want to fill up your contribution graph or even make cool patterns and artwork.

## Getting Started

Follow these steps to bring your contribution graph to life:

1. **Clone this repository**
```bash
git clone https://github.com/DishantBhere
cd goGreen
```
3. **Set up your project**
Initialize a new Node.js project:
```bash
npm init -y
  ```
3. **Install the required npm modules**
You'll need a few modules to get everything running smoothly. Install them all with:
  ```bash
  npm install moment simple-git random
  ```
4. **Create your commit script**
- Create a JavaScript file to manage your commits.
- Create a JSON file to store all the commit timestamp data.

## Room for Improvement

So, you've got the basics down. What's next?

- **Custom Patterns:** Experiment with different patterns on your contribution graph. Maybe spell out your name or create some cool designs.
- **Density Control:** Play around with the number of commits per day to adjust the shades of green.
- **Input Strings:** Convert input strings to X-Y mapped contributions.

## npm Modules Used

- [`moment`](https://www.npmjs.com/package/moment) - Handles date and time manipulation.
- [`simple-git`](https://www.npmjs.com/package/simple-git) - For easy Git commands.
- [`random`](https://www.npmjs.com/package/random) - To generate random numbers for the commits.

## Credits


=======
# Victor
>>>>>>> 4d5bc380df0a26cbe64ed5f2b0f76d4cf52d55d9
=======
# Teaching Internet Basics — NetWise
A Flask and MySQL learning portal for teaching safe, effective everyday Internet use. Students work through database-backed lessons, tracked progress, scored quizzes, feedback and surveys; administrators manage learning content and review operational data.

## Stack
Python 3, Flask, SQLAlchemy, Flask-Migrate, Flask-Login, Flask-WTF, MySQL (production), SQLite (local testing), Bootstrap 5 and Jinja2.

## Setup
1. `python -m venv .venv && source .venv/bin/activate`
2. `pip install -r requirements.txt`
3. `cp .env.example .env` and set a strong `SECRET_KEY` and MySQL `DATABASE_URL`.
4. Create the MySQL database named in the URL. For local SQLite, use `DATABASE_URL=sqlite:///instance/portal.db`.
5. `flask --app run.py db init` (once), then `flask --app run.py db migrate -m "initial schema" && flask --app run.py db upgrade`.
6. `python seed/seed.py`, then `flask --app run.py run`.

## Development accounts
Seeded accounts are **development-only**: `admin@netwise.local` / `ChangeMe123!` and `student@netwise.local` / `Student123!`. Replace or remove these before deployment.

## Tests
Run `pytest`. Tests use isolated SQLite data and CSRF is enabled in production/development.

## Security
Secrets stay in environment variables. Passwords use Werkzeug hashes; protected routes enforce roles server-side; CSRF, ORM parameterisation, secure cookie settings and baseline security headers are enabled.

## Screenshots
Capture deployment screenshots here for the academic report.

## Future enhancements
Email notifications, granular admin audit logs, content image uploads with validation, and server-generated PDF certificates.

## Curriculum and analytics
The seed contains six authored curriculum areas, sixty lessons, and fifteen quiz questions per module. Student and administrator screens calculate progress, quiz outcomes, completion and feedback metrics from database records. The admin dashboard uses Chart.js for module completion, quiz performance, and feedback-rating views.

## Production deployment
Set `FLASK_ENV=production`, a long random `SECRET_KEY`, a MySQL `DATABASE_URL`, and serve the WSGI application `run:app` behind HTTPS. Do not run seeded development credentials in production.
>>>>>>> ae3d96db570956dbc00a84c931854affaa912a26
