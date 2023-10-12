COMPOSE_DEV_FILE = 'docker/compose.dev.yml'

.PHONY: dev-up dev-down dev-clean

dev-local-up:
	docker compose --env-file .env -f ${COMPOSE_DEV_FILE} up -d

dev-local-down:
	docker compose --env-file .env -f ${COMPOSE_DEV_FILE} down

dev-local-clean:
	docker compose --env-file .env -f ${COMPOSE_DEV_FILE} down -v
