FROM python:3.6
MAINTAINER Alvin Aliev,alielvinme@gmail.com
ENV PYTHONUNBUFFERED 1

RUN mkdir -p /backend
WORKDIR /backend
COPY . /backend

RUN pip install virtualenvwrapper
RUN python3 -m venv /venv
RUN /venv/bin/pip install -U pip
RUN /venv/bin/pip install --no-cache-dir -r requirements.txt
RUN /venv/bin/python manage.py makemigrations --noinput
RUN /venv/bin/python manage.py migrate
RUN if [ -f manage.py ]; then /venv/bin/python manage.py collectstatic --noinput; fi

EXPOSE 8000
