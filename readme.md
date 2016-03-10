# Revinate Styleguide

### Pre-requisites

- NodeJS - [https://nodejs.org/]()
- Compass - `gem install compass`

### Setup

- Run `npm install`

### Update Styleguide

- Change `styleguide-markdown.md` as needed
- Run `grunt`

### Start local server

- To visualize the styleguide in your local env., run `grunt` from the terminal and visit `http://localhost:9000`

### Compile Sass
- `compass compile` or `compass watch`

### How to Deploy
- run `cd deploy_scripts`
- run `bundle install` (First time only)
- run `cap production deploy`
