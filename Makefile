install:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

bin:
	npm run babel-node -- src/bin/start.js

lint:
	npm run eslint .

clean:
	rm -rf dist

.PHONY: test
