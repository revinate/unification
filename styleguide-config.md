# Styleguide options

### Head
    <link rel='stylesheet' href='css/styledown.css'>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="bower_components/bootstrap-toggle/css/bootstrap-toggle.css" />
    <link rel="stylesheet" href="bower_components/nya-bootstrap-select/dist/css/nya-bs-select.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

### Body

    <div class="l-app" id="styleguide">

      <main class="l-main">
        <div class="container">
            <div class="styleguide-header row pd-xl">
            <div class="col-lg-12">
            <span class="logo">
            <i class="revicon-revinate-logo"></i>
            </span>
              <h1>Revinate Style Guide</h1>
              <p>Our styleguide/css is based off of <a href="http://getbootstrap.com/">Twitter
              Bootstrap</a>, and uses <a href="https://smacss.com/">SMACSS (Scalable and Modular Architecture for
              CSS)</a>. This documentation contains code examples, and highlights extra classes needed on top of
              Twitter Bootstrap classes.</p>
              <p>PS. In order to optimize css load time, we have removed the following unnecessary Twitter Bootstrap
              includes: print, glyphicons, progress bars and carousel. If you wish to use any of these styles, please
              uncomment the respective line(s) in /scss/bootstrap.scss and compile sass.
              </p>
              </div>
            </div>
            <div class="l-main-content row pd-xl">

              <nav class="sidebar-menu col-sm-3 hidden-xs hidden-sm" id="myScrollSpy">
                <ul class="nav bs-docs-sidenav" data-spy="affix" data-offset-top="270">
                  <li><a href="#general-layout">General Layout</a></li>  
                  <li><a href="#primary-menu">Primary Menu</a></li>
                  <li><a href="#headers-and-breadcrumbs">Headers and Breadcrumbs</a></li>
                  <li><a href="#tables">Tables</a></li>
                  <li><a href="#buttons">Buttons</a></li>
                  <li><a href="#labels-and-badges">Labels &amp; Badges</a></li>
                  <li><a href="#wizard-navigation">Wizard Navigation</a></li>
                  <li><a href="#tertiary-navigation">Tertiary Navigation</a></li>
                  <li><a href="#forms">Forms</a></li>
                  <li><a href="#switches">Switches</a></li>
                  <li><a href="#dashboards">Dashboards</a></li>
                  <li><a href="#collapse-accordion">Collapse/Accordion</a></li>
                  <li><a href="#alerts">Alerts</a></li>
                  <li><a href="#typography-and-lists">Typography &amp; Lists</a></li>
                  <li><a href="#charts">Charts</a></li>
                  <li><a href="#modals">Modals</a></li>
                  <li><a href="#tooltips">Tooltips</a></li>
                  <li><a href="#pagination">Pagination</a></li>
                  <li><a href="#filters">Filters</a></li>
                  <li><a href="#integration">Integration</a></li>
                </ul>
              </nav>

            <div class="styleguide col-sm-9" ng-app="main">
              <div sg-content ng-controller="MainCtrl"></div>
            </div>
          </div>
        </div>
      </main>
      <footer class="l-footer pd-md">
        <i class="revicon-revinate-logo"></i>
      </footer>
    </div>

    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js"></script>
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/angular-strap/dist/angular-strap.min.js"></script>
    <script src="bower_components/angular-strap/dist/angular-strap.tpl.min.js"></script>
    <script src="js/rev-ng-switch.js"></script>
    <script src="js/rev-jq-switch.js"></script>
    <script src="bower_components/bootstrap-toggle/js/bootstrap-toggle.js"></script>
    <script src="bower_components/bootstrap-select/js/bootstrap-select.js"></script>
    <script src="bower_components/nya-bootstrap-select/dist/js/nya-bs-select.js"></script>
    <script src="vendor_manual/lvlDragDrop/script/lvl-uuid.js"></script>
    <script src="vendor_manual/lvlDragDrop/script/lvl-drag-drop.js"></script>
    <script src="https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js"></script>
    <script src="js/main.js"></script>
    <script>
    $('.bs-docs-sidenav li').click(function(){
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-rev-jq-switch=true]').revSwitch();
    </script>
