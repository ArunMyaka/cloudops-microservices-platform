.PHONY: setup up down logs test api-test

setup:
	cp .env.example .env

up:
	docker compose up --build

down:
	docker compose down

logs:
	docker compose logs -f

test:
	cd app/backend && pytest

api-test:
	curl http://localhost:8000/health

