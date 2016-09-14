# Revinate Styleguide

### Pre-requisites

- NodeJS - [https://nodejs.org/]()
- Jekyll - [https://jekyllrb.com/docs/quickstart/]

### Setup

- Run `gem install jekyll bundler`

### Update Styleguide

- create posts in each collection in order to add items to the styleguide, posts need to be created in the format `YYY-MM-DD-name.markdown`
- multiple posts on the same day default to alphabetical order, to override this, use the date Front Matter inside the post. Change the time field to create heirarchy. 

### Start local server

- To visualize the styleguide in your local env., run `bundle exec jekyll serve --I` from the terminal and visit `http://localhost:4000`

### Compile Sass
- jekyll serve task will watch for changes in the `_posts` and `_sass` directories

### How to Deploy
- run `cd deploy_scripts`
- run `bundle install` (First time only)
- run `cap production deploy`
