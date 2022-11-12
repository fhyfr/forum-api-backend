#
# Forum API Backend Project
#

PROJECT = "Forum API Backend Project"

run: ;@echo "Running ${PROJECT}....."; \
	npm run start

run_dev: ;@echo "Running development ${PROJECT}....."; \
  npm run start:dev

install: ;@echo "Installing ${PROJECT}....."; \
	npm install

clean: ;
	rm -rf node_modules

test: ;@echo "Testing ${PROJECT}....."; \
	export NODE_PATH=.; \
	npm run test

migrate: ;@echo "Migrating database ${PROJECT}....."; \
	npm run migrate

lint:
	npm run lint


.PHONY: install clean test run lint