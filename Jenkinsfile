new gantry.SymfonyBuild()
  .withName('unification')
  .withMakeBuildCommand('docker run --rm -v `pwd`:/var/www/app registry.revinate.net/common/ruby:2.1-debian-nodejs bash -c "cd /var/www/app && make build"')
  .withAutoDeployToTestViaKubeCtl('unification')
  .notifySlackChannel('#ux-team')
  .execute()