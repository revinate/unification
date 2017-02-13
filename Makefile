.PHONY: help build build-dev
help:
	@grep '^[^#[:space:]].*:' Makefile | grep -v .PHONY | sed "s/://g"
build:
	npm install -g bower
	npm install -g webpack
	npm install -g es2015
	npm install -g react
	bower --allow-root install
	bundle install
	webpack
	bundle exec jekyll build
	chown -R `stat -c "%u:%g" /var/www/app` /var/www/app
watch:
	bundle install
	webpack -w
	bundle exec jekyll build --watch