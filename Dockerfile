FROM public.ecr.aws/docker/library/python:3.11-slim-bookworm

RUN pip install -U pip
COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt \
    && rm /tmp/requirements.txt
