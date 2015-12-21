### General Layout

This is the overall structure of every page. Content goes inside div with class `.l-main-content`

    @example
    div.l-app
      header.l-header
        .l-header-top
        .l-header-bottom
      main.l-main
        .container
          .l-main-content.pd-md.mg-t-xl
            <!-- content goes here -->
            p Content Goes Here
      footer.l-footer
        p.copyright.pd-md.copyright &copy; Revinate 2015. All Rights Reserved.

### Primary Menu

This component is based off of [Twitter Bootstrap tabs component](http://getbootstrap.com/javascript/#tabs). The tabbed menu is inside `.l-header-top` and the
tabbed content is inside `.l-header-bottom`.

**Extra classes**

- `.primary-menu-item-bordered` adds a border to right menu items
- `.primary-menu-item-icon` needed by icon menu items. i.e. 'Help' & 'Settings'
- `.primary-menu-item-logo` needed by the logo `<li>`
- `.primary-menu-item-text` needed by text only `<li>`. i.e. property name without dropdown
- `.primary-menu-item-label` needed by `<li>` that contains a `.label`. i.e. 'On Duty'
- `.highlight` or `.active` can be added to `<a>` in top right menu items (i.e. settings, help). to indicate the menu
 item is active.


**jQuery vs Angular**

- If you wish to use this component with **jQuery**, make sure the primary menu `<a>` tags have the attribute
`data-toggle='tab'`, otherwise remove the attribute.


    @example
    <header class="l-header">
    <div class="l-header-top">
      <div class="container">

        <ul class="primary-menu nav nav-tabs" role="tablist">
         <li class="primary-menu-item-logo primary-menu-item-text">
                             <span class="logo" title="Revinate"><i class="revicon-revinate-logo"></i></span>
                         </li>
          <li class="active">
            <a href="#dashboard" aria-controls="dashboard" role="tab" data-toggle="tab">
              Dashboard
              <i class="fa fa-circle text-danger"></i>
            </a>
          </li>
          <li>
            <a href="#marketing" aria-controls="marketing" role="tab" data-toggle="tab">Marketing</a>
          </li>
          <li class="pull-right primary-menu-item-bordered primary-menu-item-label">
            <span class="label label-success badge-label">On duty</span>
          </li>
          <li class="dropdown pull-right primary-menu-item-icon">
            <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon" data-toggle="dropdown"
               href="#" aria-expanded="false">
              <i class="fa fa-gear"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li class="dropdown pull-right primary-menu-item-icon">
            <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon" d
                           ata-toggle="dropdown"
                           href="#"
                           role="button"
                           aria-expanded="false"
                           rel="tooltip"
                           bs-tooltip
                           data-title="Help & Feedback"
                           data-placement="bottom">
              <i class="fa fa-question-circle"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li class="dropdown pull-right prop-selector">
            <a class="dropdown-toggle primary-menu-item-bordered" data-toggle="dropdown" href="#"
               aria-expanded="false">
               <i class="fa fa-caret-down pull-right"></i>
               Property
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li class="primary-menu-item-bordered primary-menu-item-text pull-right prop-selector">Property</li>
        </ul>

      </div>
    </div>

    <div class="l-header-bottom">
      <div class="tab-content container">

        <!-- dashboard tab content -->
        <div role="tabpanel" class="tab-pane active" id="dashboard">

          <button type="button" class="btn btn-primary btn-header active mg-r-sm">
            <i class="fa fa-user mg-r-xs"></i> All Feedback
          </button>

          <div class="btn-group mg-r-sm">
            <button type="button" class="btn btn-primary btn-header dropdown-toggle" data-toggle="dropdown"
                    aria-expanded="false">
              <i class="fa fa-heart mg-r-xs"></i> Sentiment Analysis <i class="fa fa-caret-down mg-l-xs"></i> <span
              class="badge badge-danger pull-right mg-l-sm">42</span>
            </button>
            <ul class="dropdown-menu" role="menu">
              <li><a class="has-badge" href="#">Action <span class="badge badge-default">6</span></a></li>
              <li><a class="has-badge" href="#">Another action <span class="badge badge-default">40</span></a></li>
              <li><a class="has-badge" href="#">Something else here this is very large
                <span class="badge badge-default">12</span></a></li>
              <li><a class="has-badge" href="#">Separated link <span class="badge badge-default">212</span></a></li>
            </ul>
          </div>

          <button type="button" class="btn btn-primary btn-header btn-rounded pull-right mg-l-sm">
            <i class="fa fa-book mg-r-xs"></i> Guests
          </button>

          <button type="button"
                  class="btn btn-sm btn-primary btn-header btn-circle pull-right mg-l-sm">
            <i class="fa fa-bookmark"></i>
          </button>

          <button type="button"
                  class="btn btn-sm btn-primary btn-header btn-circle pull-right mg-l-sm">
            <i class="fa fa-star"></i>
          </button>

        </div>

        <!-- marketing tab content -->
        <div role="tabpanel" class="tab-pane" id="marketing">
          <button type="button" class="btn btn-primary btn-header active mg-r-sm">
            <i class="fa fa-paper-plane mg-r-xs"></i> Campaigns
          </button>
          <button type="button" class="btn btn-primary btn-header mg-r-sm">
            <i class="fa fa-list-alt mg-r-xs"></i> List
          </button>
        </div>

      </div>
    </div>

  </header>


### Headers and Breadcrumbs

Herein lies the structure and styling of all page headers, header tags and breadcrumbs

**Page Header**
- Every page should have a page header that includes a page title. You can also add breadcrumbs where needed, and a
call to action button to the right (Zone 1).
- All other header tags can go directly into `.l-main-content`
- In Inguest right now, breadcrumbs are anchor tags inside of `ol.breadcrumb li`, separated by. We should
stick to the bootstrap markup for consistency. For backwards compatibility, both markup works.



    @example
    <header class="page-header">
      <ol class="breadcrumb">
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li class="active">Current Page</li>
      </ol>
      <h1>Page Title</h1>
      <a href="#" class="btn btn-primary">Call to Action</a>
    </header>

    <h2>Section Header (h2)</h2>
    <h3>Header (h3)</h3>

### Tables

- All tables use `.table`
- Row striping is controlled by `.table-striped`
- Hover interaction (only when entire row is interactive), use `.table-hover`
- Table sortable icons controlled by adding `.fa .fa-sort` and toggling `.fa-sort-asc` and `.fa-sort-desc`


**Panel Table**
- Panel tables and headers are wrapped in  `.panel`
- `.panel-default` applies the border
- Panel header is wrapped in `header.panel-heading` with title in `h3.panel-title` and subtext in `small` tag
- `button` elements may be included in the header, and will align right by default


    @example
    <div class="panel panel-default">
        <header class="panel-heading">
            <h3 class="panel-title">Full Guest Cycle Communication
                <small>Recurring, Event Driven Guest Messages</small>
            </h3>
            <button class="btn btn-primary">New Campaign</button>
        </header>
        <div class="panel-body panel-body-table">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th><a href="#">Column 2 <i class="fa fa-sort fa-sort-asc"></i></a></th>
                        <th><a href="#">Column 3 <i class="fa fa-sort fa-sort-desc"></i></a</th>
                        <th>Column 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                    </tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                    </tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                    </tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


###Buttons

- `.btn` can be applied to button and anchor elements
- 4 buttons sizes `.btn-xs .btn-sm .btn-lg` medium is the default size
- Button colors are `.btn-default .btn-primary .btn-secondary .btn-success .btn-danger .btn-info .btn-warning`


    @example
    <button class="btn btn-xs btn-default">XSmall</button>
    <button class="btn btn-sm btn-default">Small</button>
    <button class="btn btn-default">Medium</button>
    <button class="btn btn-lg btn-default">Large</button>
    <br />
    <br />
    <button class="btn btn-default">Default</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-warning">Warning</button>


###Labels and Badges

    @example
    <span class="label label-default">Default</span>
    <span class="label label-primary">Primary</span>
    <span class="label label-success">Success</span>
    <span class="label label-info">Info</span>
    <span class="label label-warning">Warning</span>
    <br />
    <br />
    <span class="label on-duty">On Duty</span>
    <span class="label off-duty">Off Duty</span>
    <span class="label on-property">On Property</span>
    <span class="label pre-sale">Pre Sale</span>
    <span class="label post-sale">Post Sale</span>
    <br /><br />
    <span class="badge on-duty">On Duty</span>
    <span class="badge off-duty">Off Duty</span>
    <span class="badge on-property">On Property</span>
    <span class="badge pre-sale">Pre Sale</span>
    <span class="badge post-sale">Post Sale</span>

### Wizard Navigation


    @example
    <ul class="nav nav-justified nav-pills nav-pills-numbered">
      <li><a href="#"><span class="nav-pills-numbered-index">1</span> Message Info</a></li>
      <li><a href="#"><span class="nav-pills-numbered-index">2</span> Target Audience</a></li>
      <li class="active"><a href="#"><span class="nav-pills-numbered-index">3</span> Content</a></li>
      <li class="disabled"><a href="#"><span class="nav-pills-numbered-index">4</span> Preview &amp; Test</a></li>
      <li class="disabled"><a href="#"><span class="nav-pills-numbered-index">5</span> Schedule</a></li>
    </ul>

### Tertiary Navigation

    @example
    <ul class="nav nav-pills nav-pills-terciary">
      <li><a href="#">Nav Element</a></li>
      <li><a href="#">Nav Element</a></li>
      <li class="active"><a href="#">Nav Element</a></li>
      <li class="disabled"><a href="#">Nav Element</a></li>
      <li class="disabled"><a href="#">Nav Element</a></li>
    </ul>


### Forms

**Basic Form**

- Text inputs, textareas and select boxes will fill the space of whatever span they are put into, and will need `.form-control` for styling. We have abandoned the `form-group` class for the bootstrap traditional `.row` and `.span-{size}-{number}` classes.
- Elements can be centered by applying the `.center-col` class to the column div.
- Checkboxes and radio buttons get an additional wrapper div of `.checkbox` and `.radio` respectively.  Labels should also wrap input elements here.
- Submit button uses standard button styles, but can be made a block element by applying the `.full-width` class.


    @example
    <form role="form" action="" method="POST">
        <div class="row">
            <div class="col-lg-12">
            <label for="_username">Label For Inputs</label>
                <input type="text" class="form-control" id="username" name="_username" value="" placeholder="12-column text field with label, no icon">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <i class="fa fa-key"></i>
                <input type="password" class="form-control with-icon" id="password" name="_password" placeholder="8-column text field with icon - no label">
            </div>
        </div>
        <div class="row">
            <div class="center-col col-lg-6">
                <textarea class="form-control" rows="6" placeholder="6-column textarea, centered"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <select class="form-control">
                    <option value="0" selected>4-Column Select Dropdown</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" value=""> Checkbox
                    </label>
                    <div class="pull-right">
                        <a href="#">Need more Info?</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
                    <div class="col-lg-12">
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""> Inline Checkbox
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value=""> Inline Checkbox
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="" disabled > Inline Checkbox
                            </label>
                    </div>
                </div>
        <div class="row">
                    <div class="col-lg-12">
                        <div class="radio">
                            <label><input type="radio" value="" />Radio Button</label>
                        </div>
                    </div>
        </div>
        <div class="row">
                    <div class="col-lg-12">
                            <label class="radio-inline"><input type="radio" name="optradio" />Radio Inline</label>
                            <label class="radio-inline"><input type="radio" name="optradio" />Radio Inline</label>
                            <label class="radio-inline"><input type="radio" name="optradio" disabled />Radio Inline</label>
                    </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <button type="submit" class="btn btn-primary btn-lg full-width">Submit Button</button>
            </div>
        </div>
    </form>


### Dashboards

**Dashboard Widgets**

    @example
    <div class="row">
        <div class="col-md-4">
            <div class="dashboard-widget">
                <h4 class="dashboard-widget-title">
                    Widget Title
                </h4>
                <p class="dashboard-widget-metrics">
                    $1,000,000.00
                </p>
                <div class="table-responsive">
                    <table class="dashboard-widget-table table table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    Metric Title
                                </td>
                                <td>
                                    $50
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Metric Title 2
                                </td>
                                <td>
                                    $150
                                </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
            </div>
         </div>

        <div class="col-md-4">
            <div class="dashboard-widget">
                <h4 class="dashboard-widget-title">
                    Widget Title
                </h4>
                <p class="dashboard-widget-metrics">
                    $1,000,000.00
                </p>
                <div class="table-responsive">
                    <table class="dashboard-widget-table table table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    Metric Title
                                </td>
                                <td>
                                    $50
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Metric Title 2
                                </td>
                                <td>
                                    $150
                                </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
            </div>
         </div>

    <div class="col-md-4">
            <div class="dashboard-widget">
                <h4 class="dashboard-widget-title">
                    Widget Title
                </h4>
                <p class="dashboard-widget-metrics">
                    $1,000,000.00
                </p>
                <div class="table-responsive">
                    <table class="dashboard-widget-table table table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    Metric Title
                                </td>
                                <td>
                                    $50
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Metric Title 2
                                </td>
                                <td>
                                    $150
                                </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
            </div>
         </div>
     </div>

    <div class="row">
        <div class="col-md-6">
            <div class="dashboard-widget">
                <h4 class="dashboard-widget-title">
                    Widget Title
                </h4>
                <p class="dashboard-widget-metrics">
                    $1,000,000.00
                </p>
                <div class="table-responsive">
                    <table class="dashboard-widget-table table table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    Metric Title
                                </td>
                                <td>
                                    Metric attribute
                                </td>
                                <td>
                                    Mettric attribute 2
                                </td>
                                <td>
                                    $50
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Metric Title 2
                                </td>
                                <td>
                                    Metric attribute
                                </td>
                                <td>
                                    Mettric attribute 2
                                </td>
                                <td>
                                    $150
                                </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
            </div>
         </div>
        <div class="col-md-6">
            <div class="dashboard-widget">
                <h4 class="dashboard-widget-title">
                    Widget Title
                </h4>
                <p class="dashboard-widget-metrics">
                    $1,000,000.00
                </p>
                <div class="table-responsive">
                    <table class="dashboard-widget-table table table-striped">
                        <tbody>
                            <tr>
                                <td>
                                    Metric Title
                                </td>
                                <td>
                                    Metric attribute
                                </td>
                                <td>
                                    Mettric attribute 2
                                </td>
                                <td>
                                    $50
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">
                                        Metric Link 2
                                    </a>
                                </td>
                                <td>
                                    Metric attribute
                                </td>
                                <td>
                                    Mettric attribute 2
                                </td>
                                <td>
                                    $150
                                </td>
                             </tr>
                         </tbody>
                     </table>
                </div>
            </div>
         </div>
     </div>

### Alerts

- Revinate uses standard bootstrap alerts.
- Close button can be included with `.fade .in` to add a nice little animation on close.


    @example
    <div class="alert alert-success">
        <strong>
            Success!
        </strong>
        This alert box could indicate a successful or positive action.
    </div>
    <div class="alert alert-info fade in">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>
            Info!
        </strong>
        This alert box could indicate a neutral informative change or action.
    </div>
    <div class="alert alert-warning">
        <strong>
            Warning!
        </strong>
        This alert box could indicate a warning that might need attention.
    </div>
    <div class="alert alert-danger fade in">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>
            Danger!
        </strong>
        This alert box could indicate a dangerous or potentially negative action.
    </div>

### Integration


- Add the unification repo (`git@github.com:revinate/unification`) to your project, preferably with bower;
- Copy `css_images/` & `fonts/` directories to the root of the public folder;
- In the head of every page, make sure you have `link` tags to `css/bootstrap.css` & `css/app.css`.

