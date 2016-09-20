#!/usr/bin/env bash
set -e
docker-compose run --rm build
docker-compose up nginx