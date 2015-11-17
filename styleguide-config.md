# Styleguide options

### Head
    <link rel='stylesheet' href='css/styledown.css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/app.css" />
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
              Bootstrap</a>, and uses <a href="https://smacss.com/">SMACSS (Scalable and Module Architecture for
              CSS)</a>. This documentation contains code examples, and highlights extra classes needed on top of
              Twitter Bootstrap classes.</p>
              <p>PS. In order to optimize css load time, we have removed the following unnecessary Twitter Bootstrap
              includes: print, glyphicons, progress bars and carousel. If you wish to use any of these styles, please
              uncomment the respective line(s) in /scss/bootstrap.scss and compile sass.
              </p>
              </div>
            </div>
            <div class="l-main-content row pd-xl">
            <div class="styleguide-menu col-sm-3">

              <nav class="sidebar-menu hidden-xs hidden-sm">
                <ul class="nav bs-docs-sidenav">
                  <li><a href="#general-layout">General Layout</a></li>
                  <li><a href="#primary-menu">Primary Menu</a></li>
                  <li><a href="#headers-and-breadcrumbs">Headers and Breadcrumbs</a></li>
                  <li><a href="#tables">Tables</a></li>
                  <li><a href="#buttons">Buttons</a></li>
                  <li><a href="#labels-and-badges">Labels &amp; Badges</a></li>
                  <li><a href="#wizard-navigation">Wizard Navigation</a></li>
                  <li><a href="#tertiary-navigation">Tertiary Navigation</a></li>
                  <li><a href="#forms">Forms</a></li>
                  <li><a href="#integration">Integration</a></li>
                </ul>
              </nav>

            </div>
            <div class="styleguide col-sm-9">
              <div sg-content></div>
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
    <script src="https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js"></script>
    <script>
    $('.sidebar-menu').affix({
      offset: {
        top: function () {
          return (this.top = $('.styleguide-header').outerHeight(true))
        },
        bottom: function () {
          return (this.bottom = $('.l-footer').outerHeight(true))
        }
      }
    });
    $('.bs-docs-sidenav li a').click(function(){
        $(this).parent('li').siblings().find('a').removeClass('active');
        $(this).addClass('active');
    });
    </script>