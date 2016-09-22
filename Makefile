.PHONY: help build build-dev
help:
	@grep '^[^#[:space:]].*:' Makefile | grep -v .PHONY | sed "s/://g"
build:
	npm install -g bower
	bower --allow-root install
	bundle install
	bundle exec jekyll build
	chown -R `stat -c "%u:%g" /var/www/app` /var/www/app
watch:
	bundle install
	bundle exec jekyll build --watch