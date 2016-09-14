# Styleguide options

### Head
    <link rel='stylesheet' href='css/styledown.css'>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="libs/bootstrap-toggle/css/bootstrap-toggle.css" />
    <link rel="stylesheet" href="libs/nya-bootstrap-select/dist/css/nya-bs-select.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      #sort tbody {
        cursor: move;
      }
    </style>

### Body

    <div class="l-app" id="styleguide">
    
        <header class="l-header navbar-fixed-top" style="position: fixed;">
          <div class="l-header-top">
            <div class="container">
    
              <ul class="primary-menu nav nav-tabs" role="tablist">
                <li class="primary-menu-item-logo primary-menu-item-text">
              <span class="logo" title="Revinate">
                <i class="revicon-revinate-logo"></i>
              </span>
                </li>
                <li class="principles">
                  <a href="principles.html" role="tab">
                    Principles
                  </a>
                </li>
                <li class="style-guide active">
                  <a href="index.html" role="tab">Style Guide</a>
                </li>
                <li class="resources">
                  <a href="resources.html" role="tab">
                    Resources
                  </a>
                </li>
                </ul>
    
          </div>
            </div>
    
          <div class="l-header-bottom">
            <div class="tab-content container">
    
              <!-- principles tab content -->
              <div role="tabpanel" class="tab-pane active" id="principles">
    
    
    
              </div>
    
              <!-- style-guide tab content -->
              <div role="tabpanel" class="tab-pane active" id="style-guide">
                <div class="btn-group mg-r-sm">
                  <button type="button" class="btn btn-primary btn-header dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Basics
                    <i class="fa fa-caret-down mg-l-xs"></i>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a href="#colors">Colors</a>
                    </li>
                    <li>
                      <a href="#typography">Typography
                      </a>
                    </li>
                    <li>
                      <a href="#buttons">Buttons
                      </a>
                    </li>
                    <li>
                      <a href="#form-elements">Form Elements
                      </a>
                    </li>
                    <li>
                      <a href="#labels-and-badges">Labels &amp; Badges
                      </a>
                    </li>
                    <li>
                      <a href="#tooltips">Tooltips
                      </a>
                    </li>
                    <li>
                      <a href="#waiting-spinner">Waiting Spinner
                      </a>
                    </li>
                  </ul>
                </div>
    
                <div class="btn-group mg-r-sm">
                  <button type="button" class="btn btn-primary btn-header dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Components
                    <i class="fa fa-caret-down mg-l-xs"></i>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a href="#general-layout">General Layout</a>
                    </li>
                    <li>
                      <a href="#primary-menu">Primary Menu</a>
                    </li>
                    <li>
                      <a href="#headers-and-breadcrumbs">Headers and Breadcrumbs</a>
                    </li>
                    <li>
                      <a href="#tables">Tables</a>
                    </li>
                    <li>
                      <a href="#data-tables">Data Tables</a>
                    </li>
                    <li>
                      <a href="#buttons">Buttons</a>
                    </li>
                    <li>
                      <a href="#labels-and-badges">Labels &amp; Badges</a>
                    </li>
                    <li>
                      <a href="#wizard-navigation">Wizard Navigation</a>
                    </li>
                    <li>
                      <a href="#tertiary-navigation">Tertiary Navigation</a>
                    </li>
                    <li>
                      <a href="#forms">Forms</a>
                    </li>
                    <li>
                      <a href="#switches">Switches</a>
                    </li>
                    <li>
                      <a href="#dashboards">Dashboards</a>
                    </li>
                    <li>
                      <a href="#collapse-accordion">Collapse/Accordion</a>
                    </li>
                    <li>
                      <a href="#alerts">Alerts</a>
                    </li>
                    <li>
                      <a href="#typography-and-lists">Typography &amp; Lists</a>
                    </li>
                    <li>
                      <a href="#charts">Charts</a>
                    </li>
                    <li>
                      <a href="#modals">Modals</a>
                    </li>
                    <li>
                      <a href="#tooltips">Tooltips</a>
                    </li>
                    <li>
                      <a href="#pagination">Pagination</a>
                    </li>
                    <li>
                      <a href="#filters">Filters</a>
                    </li>
                    <li>
                      <a href="#integration">Integration</a>
                    </li>
                  </ul>
                </div>
    
                <div class="btn-group mg-r-sm">
                  <button type="button" class="btn btn-primary btn-header dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Modules
                    <i class="fa fa-caret-down mg-l-xs"></i>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a href="#">Action
                      </a>
                    </li>
                    <li>
                      <a href="#">Another action
                      </a>
                    </li>
                    <li>
                      <a href="#">Something else here this is very large
                      </a>
                    </li>
                    <li>
                      <a href="#">Separated link
                      </a>
                    </li>
                  </ul>
                </div>
    
                <div class="btn-group mg-r-sm">
                  <button type="button" class="btn btn-primary btn-header dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Templates
                    <i class="fa fa-caret-down mg-l-xs"></i>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a href="#">Action
                      </a>
                    </li>
                    <li>
                      <a href="#">Another action
                      </a>
                    </li>
                    <li>
                      <a href="#">Something else here this is very large
                      </a>
                    </li>
                    <li>
                      <a href="#">Separated link
                      </a>
                    </li>
                  </ul>
                </div>
    
                <div class="btn-group mg-r-sm">
                  <button type="button" class="btn btn-primary btn-header dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Pages
                    <i class="fa fa-caret-down mg-l-xs"></i>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a href="#">Action
                      </a>
                    </li>
                    <li>
                      <a href="#">Another action
                      </a>
                    </li>
                    <li>
                      <a href="#">Something else here this is very large
                      </a>
                    </li>
                    <li>
                      <a href="#">Separated link
                      </a>
                    </li>
                  </ul>
                </div>
    
              </div>
    
              <!-- resources tab content -->
              <div role="tabpanel" class="tab-pane" id="resources">
    
    
    
              </div>
    
            </div>
          </div>
        </header>

      <main class="l-main">
        <div class="container" style="padding-top: 135px;">
            <div class="l-main-content row pd-xl">

           

            <div class="styleguide col-sm-12" ng-app="main">
              <div sg-content ng-controller="MainCtrl"></div>
            </div>
          </div>
        </div>
      </main>
      <footer class="l-footer pd-md">
        <i class="revicon-revinate-logo"></i>
      </footer>
    </div>

    <script src="libs/jquery/dist/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
    <script src="libs/bootstrap-sass-official/assets/javascripts/bootstrap.min.js"></script>
    <script src="libs/angular/angular.min.js"></script>
    <script src="libs/bootstrap-daterangepicker/moment.js"></script>
    <script src="libs/bootstrap-daterangepicker/daterangepicker.js"></script>
    <script src="libs/bootstrap-daterangepicker/daterangepicker-angular.js"></script>
    <script src="libs/angular-strap/dist/angular-strap.min.js"></script>
    <script src="libs/angular-strap/dist/angular-strap.tpl.min.js"></script>
    <script src="libs/jquery-datatables/js/jquery.dataTables.js"></script>
    <script src="libs/angular-datatables/angular-datatables/dist/angular-datatables.min.js"></script>
    <script src="libs/angular-datatables/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.min.js"></script>
    <script src="js/angular/styleguide.js"></script>
    <script src="js/angular/rev-ng-switch.js"></script>
    <script src="js/rev-jq-switch.js"></script>
    <script src="libs/bootstrap-toggle/js/bootstrap-toggle.js"></script>
    <script src="libs/bootstrap-select/js/bootstrap-select.js"></script>
    <script src="libs/nya-bootstrap-select/dist/js/nya-bs-select.js"></script>
    <script src="https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js"></script>
    <script src="js/main.js"></script>
    <script>
      $('.bs-docs-sidenav li').click(function(){
          $(this).siblings('li').removeClass('active');
          $(this).addClass('active');
      });
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-rev-jq-switch=true]').revSwitch();
      var fixHelper = function(e, ui) {
          ui.children().each(function() {
              $(this).width($(this).width());
          });
          return ui;
      };

      $("#sort tbody").sortable({
          helper: fixHelper
      }).disableSelection();

      $('input[name="daterange"]').daterangepicker({
          applyClass: 'btn-primary',
          cancelClass: 'btn-link'
      });
    </script>

    <script type="text/javascript">
    $(function() {

        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
        cb(moment().subtract(29, 'days'), moment());

        $('#reportrange').daterangepicker({
            applyClass: 'btn-primary',
            cancelClass: 'btn-link',
            opens: 'left',
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

    });
    </script>
