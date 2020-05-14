#!/usr/bin/env bash

# docker build -t irmameet .
docker run -i -p 8181:8181 -v "`pwd`":/app irmameet