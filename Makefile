COMPOSE_DEV_FILE = 'docker/compose.dev.yml'
ENV_FILE = '.env'

.PHONY: dev-up dev-down dev-clean

dev-up:
	docker compose --env-file ${ENV_FILE} -f ${COMPOSE_DEV_FILE} up -d

dev-down:
	docker compose --env-file ${ENV_FILE} -f ${COMPOSE_DEV_FILE} down

dev-clean:
	docker compose --env-file ${ENV_FILE} -f ${COMPOSE_DEV_FILE} down -v
