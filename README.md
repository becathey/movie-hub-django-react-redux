# Movie Hub

Movie Hub is an application that displays top-rated movies. It is built with a Django/Django REST Framework backend, which serves static files created by a React/Redux frontend.

## Clone the Repository

```
git clone https://github.com/becathey/movie-hub-django-react-redux.git
```

## Create & Activate a Virtual Environment

In the project directory, create and activate a virtual environment. For example:

```
python3 -m venv .venv
source .venv/bin/activate
```

## Install the Dependencies

To install the dependencies for the Django/DRF backend, run:

```
pip install -r requirements.txt
```

To install the dependencies for the React/Redux frontend, run:

```
npm install
```

## Environment Variables

Create a .env file in root of project, and add a SECRET_KEY:

```
SECRET_KEY='<create-and-add-your-secret-key-here>'
```

The .env file should be added to a .gitignore file to protect your secret key.

## Apply Migrations

To create sqlite3 database, apply migrations by running:

```
python manage.py migrate
```

## Run the App

To run the backend in development mode, run:

```
python manage.py runserver
```

To run the frontend in development mode and create the static files, open a second terminal and run:

```
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) in the browser to view the application.

## Create Superuser

To create a superuser account for login, run:

```
python manage.py createsuperuser
```

Set username, email, and password

## Add Test Data

Open [http://localhost:8000/admin](http://localhost:8000/admin) in the browser to log in to the superuser account.

Click Add icon next to Movies to create movie instances.

## Deploy the App

To learn how to make the application production-ready and to deploy it, see the Django documentation:

[How to Deploy Django](https://docs.djangoproject.com/en/4.1/howto/deployment/)