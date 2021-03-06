.PHONY: help build build-dev
help:
	@grep '^[^#[:space:]].*:' Makefile | grep -v .PHONY | sed "s/://g"
build:
	npm install -g bower
	npm install -g webpack@2.2.1
	npm install -g react
	bower --allow-root install
	bundle install
	bundle exec jekyll build
	chown -R `stat -c "%u:%g" /var/www/app` /var/www/app
watch:
	bundle install
	bundle exec jekyll build --watch