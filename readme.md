# Revinate Styleguide

### Pre-requisites

- NodeJS - [https://nodejs.org/]()
- Jekyll - [https://jekyllrb.com/docs/quickstart/]

1) Running
----------
###### ensure that you've install dinghy for docker
    see [https://github.com/revinate/app-docker-scripts/blob/master/install_dev_dependencies.sh](https://github.com/revinate/app-docker-scripts/blob/master/install_dev_dependencies.sh)
###### startup
    ./startup.sh

2) Accessing
------------

Head over to http://app.docker:4000
    

3) Misc
-------
    
### Update Styleguide

- create posts in each collection in order to add items to the styleguide, posts need to be created in the format `YYY-MM-DD-name.markdown`
- multiple posts on the same day default to alphabetical order, to override this, use the date Front Matter inside the post. Change the time field to create heirarchy. 

### Compile Sass
- jekyll build (which is called in startup.sh) will watch for changes in the `_posts` and `_scss` directories

### How to Deploy
- test is auto-deployed. see [Jenkinsfile](./Jenkinsfile)
- use kube-deploy to deploy production
