new gantry.SymfonyBuild()
  .withName('unification')
  .withMakeBuildCommand('docker run --rm -v `pwd`:/var/www/app registry-v2.revinate.net/common/ruby:2.1-debian-nodejs bash -c "cd /var/www/app && make build"')
  .execute()

stage 'Helm publish'
node {
    checkout scm
    helmPublish()
}
