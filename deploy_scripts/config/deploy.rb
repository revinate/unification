require 'capistrano/ext/multistage'

set :stages, ['testing', 'production']
set :default_stage, 'testing'
set :application, 'design-app'
set :repository, 'git@github.com:revinate/unification.git'
set :scm, :git

set :user, 'deploy'
set :deploy_via, :remote_cache
set :use_sudo, false
set :normalize_asset_timestamps, false

before "deploy:restart", "deploy:npm"
after "deploy:npm", "deploy:bower"
after "deploy:bower", "deploy:grunt"

desc "Npm install"
deploy.task :npm do
    run "cd #{release_path} && npm install"
end

desc "Bower install"
deploy.task :bower do
    run "cd #{release_path} && bower install"
end

desc "Grunt"
deploy.task :grunt do
    run "cd #{release_path} && grunt deploy"
end

desc "Restart Apache"
deploy.task :restart, :roles => :app, :except => { :no_restart => true } do
  run "#{sudo} /etc/init.d/apache2 reload"
end
