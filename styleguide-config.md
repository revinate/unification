# Styleguide options

### Head
    <link rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/app.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style rel='stylesheet'>
      #styleguide .sg-canvas .container {width: 100% !important;}
      #styleguide .sg-canvas .l-app {background: #F3F3F4;}
      #styleguide .sg-canvas .l-header { position: relative; z-index: 1; }
      .sg-text, .sg-example { float: none; width: 100% !important; }
      nav.sidebar-menu.affix-top { margin-top: 100px; }
    </style>

### Body

    <div class="l-app" id="styleguide">
      <header class="l-header">
        <div class="l-header-top">
          <div class="container">
            <ul class="primary-menu nav nav-tabs">
              <li class="primary-menu-item-logo">
                <a class="logo" href="#">Revinate</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main class="l-main">
        <div class="container">
          <div class="l-main-content row pd-xl mg-t-xl">
            <div class="styleguide-header col-sm-12">
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
            <div class="styleguide-menu col-sm-3">

              <nav class="sidebar-menu hidden-xs hidden-sm">
                <ul class="nav bs-docs-sidenav">
                  <li><a href="#general-layout">General Layout</a></li>
                  <li><a href="#primary-menu">Primary Menu</a></li>
                  <li><a href="#headers-and-breadcrumbs">Headers and Breadcrumbs</a></li>
                  <li><a href="#tables">Tables</a></li>
                  <li><a href="#buttons">Buttons</a></li>
                  <li><a href="#labels-and-badges">Labels &amp; Badges</a></li>
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
        <p class="copyright">&copy; Revinate Styleguide 2015. All Rights Reserved</p>
      </footer>
    </div>

    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js"></script>
    <script src="https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js"></script>
    <script>
    $('.sidebar-menu').affix({
      offset: {
        top: 100,
        bottom: function () {
          return (this.bottom = $('.l-footer').outerHeight(true))
        }
      }
    });
    </script>