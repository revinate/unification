### General Layout

This is the overall structure of every page. Content goes inside div with class `.l-main-content`.
Everything inside follows the standard Bootstrap 12-column grid, using `.row` and `.col-xs- .col-sm- .col-md- .col-lg`. Using  `.col-md-*` will stack on mobile and tile on desktop.
- spinner is created using `.spinner` and including `.bounce1 .bounce2 .bounce3` divs.  For M and E, please use the spinner directive.


    @example
    div.l-app
      header.l-header
        .l-header-top
        .l-header-bottom
      main.l-main
        .container
          .l-main-content.pd-md.mg-t-xl
            ul.global-actions-nav.pull-right
                li
                    a
                        i.fa.fa-file-pdf-o
                li
                    i.fa.fa-file-pdf-o
            <!-- content goes here -->
            p Content Goes Here            
            .row
              .col-md-12
                .spinner
                  .bounce1
                  .bounce2
                  .bounce3            
            .row.show-grid
              .col-md-1
                p col-1
              .col-md-2
                p col-2
              .col-md-3
                p col-3
              .col-md-4
                p col-4
              .col-md-2
                p col-2

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
          <li class="dropdown pull-right primary-menu-item-icon"
              title="Settings"
              data-toggle="tooltip"
              data-placement="bottom">
            <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon" data-toggle="dropdown"
               href="#" aria-expanded="false">
              <i class="fa fa-gear"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li class="is-superadmin"><a href="#">SuperAdmin action</a></li>
            </ul>
          </li>
          <li class="dropdown pull-right primary-menu-item-icon"
              title="Help & Feedback"
              data-toggle="tooltip"
              data-placement="bottom">
            <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon"
                           data-toggle="dropdown"
                           href="#"
                           role="button"
                           aria-expanded="false">
              <i class="fa fa-question-circle"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li class="dropdown pull-right prop-selector always-active">
            <a class="dropdown-toggle primary-menu-item-bordered" data-toggle="dropdown" href="#"
               aria-expanded="false">
               <i class="fa fa-caret-down pull-right"></i>
               Property
            </a>
            <ul class="dropdown-menu" role="menu">
              <li class="underline account-switcher">
                <h4>Switch Accounts</h4>
                    <ul id="header_account_selector" class="account_selector contact-selector property-selector">
                        <input type="hidden">
                            <li class="prop-input">
                                <input type="text" class="text property-input form-control" autocomplete="off">
                                <span class="focus"><i class="icon icon_magnifying_glass"></i></span>
                            </li>
                    </ul>
                    <div class="contact-autocomplete" style="display:none;">
                        <ul style="display:none;">
                        </ul>
                    <div>type account name...</div>
                    </div>
              </li>
              <li class="recently-accessed">
                <h4>Recently Accessed</h4>
                <ul>
                    <li>
                        <a href="/goto-hotel-id/352/">
                            Trump International Hotel Las Vegas, NV
                        </a>
                    </li>
                    <li>
                        <a href="/goto-hotel-id/352/">
                            Trump International Hotel Las Vegas, NV
                        </a>
                    </li>
                    <li>
                        <a href="/goto-hotel-id/352/">
                            Trump International Hotel Las Vegas, NV
                        </a>
                    </li>
                    <li>
                        <a href="/goto-hotel-id/352/">
                            Trump International Hotel Las Vegas, NV
                        </a>
                    </li>                                        
                </ul>
              </li>
              <li class="underline full-account-list">
                <a class="bordered" href="/hotel-selection">
                    Full Account List
                </a>
              </li>
            </ul>
          </li>
          <li class="primary-menu-item-bordered primary-menu-item-text pull-right prop-selector">
          Property</li>
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
- The table below features a multi-select column header.
- When a table row has multiple actions, put the actions under a dropdown, otherwise just use a simple link. Refer to
the "Actions" column in the table below.
- When table rows are clickable or draggable, use hover table.


    @example
    <div class="panel panel-default">
        <header class="panel-heading">
            <h3 class="panel-title">Default Table
                <small>List of entities</small>
            </h3>
            <button class="btn btn-primary">New Entity</button>
        </header>
        <div class="panel-body panel-body-table">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th><a href="#">Column 2 <i class="fa fa-sort fa-sort-asc"></i></a></th>
                        <th><a href="#">Column 3 <i class="fa fa-sort fa-sort-desc"></i></a></th>
                        <th>
                            <select class="selectpicker" multiple title="Select Multiple">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td>
                            <div class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="menu1">
                                    Actions
                                    <b class="caret"></b>
                                </a>
                                <ul class="dropdown-menu" id="menu1">
                                    <li><a href="#">Action 1</a></li>
                                    <li><a href="#">Action 2</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td>
                            <div class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="menu2">
                                    Actions
                                    <b class="caret"></b>
                                </a>
                                <ul class="dropdown-menu" id="menu2">
                                    <li><a href="#">Action 1</a></li>
                                    <li><a href="#">Action 2</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td><a href="#">Action</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="panel panel-default">
        <header class="panel-heading">
            <h3 class="panel-title">Draggable Table
                <small>List of draggable entities.</small>
            </h3>
            <button class="btn btn-primary">New Campaign</button>
        </header>
        <div class="panel-body panel-body-table">
            <table class="table table-striped table-hover" id="sort">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th><a href="#">Column 2 <i class="fa fa-sort fa-sort-asc"></i></a></th>
                        <th><a href="#">Column 3 <i class="fa fa-sort fa-sort-desc"></i></a></th>
                        <th>
                            <select class="selectpicker" multiple title="Select Multiple">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr draggable='true'>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td>
                            <div class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="menu1">
                                    Actions
                                    <b class="caret"></b>
                                </a>
                                <ul class="dropdown-menu" id="menu1">
                                    <li><a href="#">Action 1</a></li>
                                    <li><a href="#">Action 2</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr draggable='true'>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td>
                            <div class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="menu2">
                                    Actions
                                    <b class="caret"></b>
                                </a>
                                <ul class="dropdown-menu" id="menu2">
                                    <li><a href="#">Action 1</a></li>
                                    <li><a href="#">Action 2</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr draggable='true'>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        <td>Data 4</td>
                        <td><a href="#">Action</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

###Data Tables

####Setup Instructions

- `bower install angular-datatables`
- Dependencies: `bower install jquery` and `bower install datatables.net`
- Add as a dependency of your angular module `angular.module('mymodule', ['datatables', 'datatables.bootstrap']);`
- Refer to http://l-lin.github.io/angular-datatables/#/welcome for instructions on configuration and extensions

<table class="table table-striped table-bordered" datatable dt-options="dtOptions">
  <thead>
  <tr>
      <th>ID</th>
      <th>First name</th>
      <th>Last name</th>
  </tr>
  </thead>
  <tbody>
  <tr>
      <td>1</td>
      <td>Foo</td>
      <td>Bar</td>
  </tr>
  <tr>
      <td>123</td>
      <td>Someone</td>
      <td>Youknow</td>
  </tr>
  <tr>
      <td>987</td>
      <td>Iamout</td>
      <td>Ofinspiration</td>
  </tr>
  </tbody>
</table>

###Buttons

- `.btn` can be applied to button and anchor elements
- 4 buttons sizes `.btn-xs .btn-sm .btn-lg` medium is the default size
- Button colors are `.btn-default .btn-primary .btn-secondary .btn-success .btn-danger .btn-info .btn-warning .btn-delete`


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
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-delete">Delete</button>
    <button class="btn btn-link">Link</button>
    <br />
    <br />
    <button class="btn btn-internal-primary">Internal Use - primary</button>
    <button class="btn btn-internal-secondary">Internal Use - secondary</button>
    <br />
    <br />
    <button class="btn btn-default btn-sm" disabled="disabled">Default (disabled)</button>
    <button class="btn btn-primary btn-sm" disabled="disabled">Primary (disabled)</button>
    <button class="btn btn-secondary btn-sm" disabled="disabled">Secondary (disabled)</button>
    <button class="btn btn-danger btn-sm" disabled="disabled">Danger (disabled)</button>

    <button class="btn btn-info btn-sm" disabled="disabled">Info (disabled)</button>
    <button class="btn btn-delete btn-sm" disabled="disabled">Delete (disabled)</button>
    <button class="btn btn-link btn-sm" disabled="disabled">Link (disabled)</button>
    <br />
    <br />
    <button class="btn btn-circle btn-xs btn-default-secondary mg-r-xs"
            data-toggle='tooltip' data-placement='bottom' title='Print'>
      <i class="fa fa-print"></i>
    </button>
    <button class="btn btn-circle btn-xs btn-default-secondary mg-r-xs"
            data-toggle='tooltip' data-placement='bottom' title='Share'>
      <i class="fa fa-share-square-o"></i>
    </button>
    <button class="btn btn-circle btn-xs btn-default-secondary mg-r-xs"
            data-toggle='tooltip' data-placement='bottom' title='Export to CSV'>
      <i class="fa fa-file-text-o"></i>
    </button>
    <button class="btn btn-circle btn-xs btn-default-secondary mg-r-xs"
            data-toggle='tooltip' data-placement='bottom' title='Export to PDF'>
      <i class="fa fa-file-pdf-o"></i>
    </button>

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

- Text inputs, textareas and select boxes will fill the space of whatever span they are put into, and will need `.form-control` for styling. We use the `.form-group` class and the bootstrap traditional `.row` and `.span-{size}-{number}` classes.
- Elements can be centered by applying the `.center-col` class to the column div.
- Checkboxes and radio buttons get an additional wrapper div of `.checkbox` and `.radio` respectively.  Labels should also wrap input elements here.
- Custom select boxes for multiselect, live search and option groups use the bootstrap-select plugin. Details can be found at <a href="https://silviomoreto.github.io/bootstrap-select/examples/" target="_blank">silviomoreto.github.io/bootstrap-select/examples/</a>.
- Submit button uses standard button styles, but can be made a block element by applying the `.full-width` class.
- Call `$('input selector').daterangepicker()` to turn an input field into a Date Range Picker with jQuery
- Date Range Picker depends on `moment.js`
- Visit http://www.daterangepicker.com/ for further instructions and examples with jQuery
- Visit https://github.com/fragaria/angular-daterangepicker for further instructions and examples with Angular


    @example
    <form role="form" action="" method="POST">
        <div class="row">
            <div class="form-group col-sm-6 col-md-4">
                <label class="control-label">Date Picker</label>
                <input type="text" class="form-control" ng-model="selectedDate" name="date" bs-datepicker/>
            </div>
            <div class="form-group col-sm-6 col-md-4">
                <label class="control-label">Time Picker</label>
                <input type="text" class="form-control" ng-model="selectedTime" data-minute-step="1" data-time-type="string" data-time-format="HH:mm" bs-timepicker="">
            </div>
            <div class="form-group col-sm-6 col-md-4">
                <label for="_username">Label For Inputs</label>
                <input type="text" class="form-control" id="username" name="_username" value="">
            </div>
            <div class="form-group col-sm-6 col-md-4">
                <label for="_username">Input w/ icon</label>
                <input type="password" class="form-control" placeholder="Enter password"/>
            </div>
            <div class="fom-group col-sm-6 col-md-4">
                <label for="_username">Select Input</label>
                <select class="selectpicker form-control" title="4-Column Select Dropdown">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>
            <div class="form-group col-sm-6 col-md-4">
                <label>Select with OptGroups</label>
                <select class="selectpicker form-control" title="Option Groups">
                    <optgroup label="Picnic">
                        <option>Mustard</option>
                        <option>Ketchup</option>
                        <option>Relish</option>
                    </optgroup>
                    <optgroup label="Camping">
                        <option>Tent</option>
                        <option>Flashlight</option>
                        <option>Toilet Paper</option>
                    </optgroup>
                </select>
            </div>
            <div class="form-group col-sm-6">
                <label>Select with Search Box</label>
                <select class="form-control selectpicker" data-live-search="true" title="Search Options">
                    <option value="0">select with search</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>
            <div class="form-group col-sm-6">
                <label>MultiSelect</label>
                <select class="form-control selectpicker" multiple title="Select Multiple">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </div>
            <div class="form-group col-sm-4">
              <label class="control-label" for="">Date Range Picker (jQuery)</label>
              <input class="form-control" type="text" name="daterange" value="01/01/2015 - 01/31/2015" />
            </div>

            <div class="form-group col-sm-4">
              <label class="control-label" for="">Date Range Picker (Angular)</label>
              <input date-range-picker class="form-control" data-apply-class="btn-primary" data-cancel-class="btn-link" type="text" ng-model="datePicker.date" />
            </div>

            <div class="form-group col-sm-4 daterangepicker-custom">
                <label for="reportrange" class="control-label">Custom Data Range Picker</label>
                <input type="text" id="reportrange" class="form-control">
            </div>

            <div class="form-group col-sm-12">
                <label for="_username">Textarea</label>
                <textarea class="form-control" rows="6" placeholder="6-column textarea, centered"></textarea>
                <span class="help-block">Help text goes here.</span>
            </div>
            <div class="form-group col-sm-6 has-error">
                <label class="control-label" for="_username">Input w/ error</label>
                <input type="text" class="form-control" placeholder="Enter info"/>
                <span class="help-block">Error message goes here</span>
            </div>
            <div class="form-group col-sm-6 has-success">
                <label class="control-label" for="_username">Input w/ success</label>
                <input type="text" class="form-control" placeholder="Enter info"/>
                <span class="help-block">Success message goes here</span>
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
            <div class="col-lg-12 checkbox">
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
            <div class="col-lg-12 radio">
                <label class="radio-inline"><input type="radio" name="optradio" />Radio Inline</label>
                <label class="radio-inline"><input type="radio" name="optradio" />Radio Inline</label>
                <label class="radio-inline"><input type="radio" name="optradio" disabled />Radio Inline</label>
            </div>
        </div>
        <div action="" class="row">
          <div class='col-xs-12'>
            <h4>Bootstrap Select (for Angular)</h4>
            <ul>
              <li>refer to <a href='http://nya.io/nya-bootstrap-select/#!/main/getting-started'>nya-bootstrap-select</a> for full documentation</li>
              <li>Use the .block class instead of .form-control</li>
            </ul>
          </div>
          <div class="form-group col-sm-3">
            <label for="" class="control-label">Select</label>
            <ol class="nya-bs-select block" ng-model="model1">
              <li nya-bs-option="option in options">
                <a>{{ option }}</a>
              </li>
            </ol>
            <p class="help-block">{{model1}}</p>
          </div>

          <div class="form-group col-sm-3">
            <label for="" class="control-label">Select w/ OptGroup</label>
            <ol class="nya-bs-select block" ng-model="model2">
              <li nya-bs-option="option in optgroupSelect group by option.class">
                <span class="dropdown-header">{{$group}}</span>
                <a>{{option.name}}</a>
              </li>
            </ol>
            <p class="help-block">{{model2}}</p>
          </div>

          <div class="form-group col-sm-3">
            <label for="" class="control-label">Select w/ Search</label>
            <ol class="nya-bs-select block" ng-model="model3" data-live-search='true'>
              <li nya-bs-option="option in options">
                <a>{{ option }}</a>
              </li>
            </ol>
            <p class="help-block">{{model3}}</p>
          </div>

          <div class="form-group col-sm-3">
            <label for="" class="control-label">Select w/ Search</label>
            <ol class="nya-bs-select block" ng-model="model4" multiple='true'>
              <li nya-bs-option="option in options">
                <a>{{ option }}</a>
              </li>
            </ol>
            <p class="help-block">{{model4}}</p>
          </div>

        </div>
        <div class="row">
            <div class="col-lg-4">
                <button type="submit" class="btn btn-primary btn-lg full-width">Submit Button</button>
            </div>
        </div>
    </form>


### Switches

**Angular & Jquery switches**

- Since the plugins were mostly developed in-house, you'll find the javascript in the unification repo under
`/js/rev-jq-switch.js` (for jquery) and `/js/rev-ng-switch.js` (for angular).
- If you provide an `on-change` function to the Angular directive, make sure this function keeps the `is-checked` value in sync.
- If you don't provide an `on-change` function to the Angular directive, clicking the switch will toggle `is-checked` value
- The angular directive calls the function setting the parameter called `value` to the current value of `is-checked`


    @example
    <div class="row">
        <div class="col-lg-12">
            <h5>Angular</h5>
            <div class="checkbox checkbox-rev-switch">
              <label for='example1' class='control-label'>
              <rev-ng-switch id='example1' is-checked="angularUiSwitch.example1"></rev-ng-switch>
               Default Switch <small>{{angularUiSwitch.example1}}</small></label>
            </div>
            <div class="checkbox checkbox-rev-switch">
              <label for='example4' class='control-label'>
              <rev-ng-switch class='primary' id='example4' on='Yes' off='No' is-checked="angularUiSwitch.example4"></rev-ng-switch>
               Primary Switch <small>{{angularUiSwitch.example4}}</small></label>
            </div>
            <div class="checkbox checkbox-rev-switch">
              <label for='example5' class='control-label'>
              <rev-ng-switch class='danger' id='example5' is-checked="angularUiSwitch.example5"></rev-ng-switch>
               Danger Switch <small>{{angularUiSwitch.example5}}</small></label>
            </div>
            <div class="checkbox checkbox-rev-switch">
              <label for='example2' class='control-label'>
              <rev-ng-switch id='example2' is-disabled='true' is-checked="angularUiSwitch.example2"></rev-ng-switch>
               Disabled Switch <small>{{angularUiSwitch.example2}}</small></label>
            </div>
            <div class="checkbox checkbox-rev-switch">
              <label for='example3' class='control-label'>
              <rev-ng-switch class='success wide' id='example3' is-checked="angularUiSwitch.example3" on-change="onChangeExample3(value)"></rev-ng-switch>
               Success Wide Switch <small>{{angularUiSwitch.example3}}</small></label>
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-lg-12">
            <h5>JQuery</h5>
            <div class="checkbox checkbox-rev-switch">
              <label class='control-label'>
                <input data-rev-jq-switch='true' on='On' off='Off' checked="checked" type='checkbox'/> Default Switch
              </label>
            </div>
            <div class="checkbox checkbox-rev-switch">
              <label class='control-label'>
                <input class='primary' type='checkbox' checked="checked" data-rev-jq-switch='true' on='On' off='Off'/> Primary Switch
              </label>
            </div>
            <div class="checkbox checkbox-rev-switch">
              <label class='control-label'>
                <input class='danger' type='checkbox' data-rev-jq-switch='true' on='On' off='Off' checked='checked'/> Danger Switch
              </label>
            </div>
            <div class="checkbox checkbox-rev-switch">
              <label class='control-label'>
                <input type='checkbox' data-rev-jq-switch='true' on='On' off='Off' disabled='disabled' checked='checked'/> Disabled Switch (on)
              </label>
            </div>
            <div class="checkbox checkbox-rev-switch">
              <label class='control-label'>
                <input type='checkbox' data-rev-jq-switch='true' on='On' off='Off' disabled='disabled'/> Disabled Switch (off)
              </label>
            </div>
            <div class="checkbox checkbox-rev-switch">
              <label class='control-label'>
                <input class='success wide' data-rev-jq-switch='true' type='checkbox' on='On' off='Off' checked="checked"/> Wide Switch
              </label>
            </div>
        </div>
    </div>

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

### Collapse/Accordion

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        Content goes here
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        Content goes here
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        Content goes here
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


### Typography and Lists


    @example
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros lacus, scelerisque bibendum neque eget, varius dictum elit. Praesent <a href="#" data-toggle="tooltip" title="first tooltip">tooltip</a>&nbsp;fermentum laoreet metus, quis interdum orci. Pellentesque eu sodales lectus. Curabitur nec dui id erat sodales venenatis sit amet eget libero. Curabitur vestibulum risus sapien, vel sodales eros rhoncus pretium. Mauris mattis vitae mi sed feugiat. Curabitur quis condimentum tellus. Aenean ultrices leo euismod augue lacinia posuere. Aliquam nunc quam, <strong>bold text</strong>&nbsp;dictum et enim at, molestie commodo lectus. Aliquam elit magna, finibus id mi non, ullamcorper luctus risus. Nam auctor nulla sit amet dignissim accumsan. Fusce et ex metus. Suspendisse potenti.</p>

    <p>Nunc mi magna, euismod ut interdum id, egestas id diam. Sed faucibus faucibus quam in semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam nec quam orci. Duis felis mi, eleifend at est in, condimentum placerat dolor. Donec dapibus ex vitae metus ornare tincidunt. Duis auctor congue maximus. Curabitur eget neque mauris. Vivamus pretium mi a tortor fermentum rhoncus. Pellentesque id porttitor quam, vitae volutpat est. Mauris et iaculis risus. Nam nisi sapien, condimentum sit amet lacus quis, pellentesque scelerisque erat. Nullam iaculis lectus sit amet est elementum faucibus.</p>

    <ul>
        <li>
            List Item
        </li>
        <li>
            List Item
        </li>
        <li>
            List Item
        </li>
        <li>
            List Item
        </li>
        <li>
            List Item
        </li>
    </ul>

    <ol>
        <li>
            List Item
        </li>
        <li>
            List Item
        </li>
        <li>
            List Item
        </li>
        <li>
            List Item
        </li>
        <li>
            List Item
        </li>
    </ol>


###Charts


- Charting uses Google Charts
- Draw charts with reSize function to make them responsive on window resize.
- Axis labels are LatoBold and all caps.  Capitalization must be done explicitly, as google charts doesn't support textTransform.
- jQuery `.extend` method is used to merge default options array with custom options per chart.
- Colors (10-12 hex values for data); should appear in this order for distinctive color contrast purposes `#8F7EC2, #2598B8, #5FC782, #ECDE31, #F55949, #AE85D4, #5FC2C2, #9ACC54, #F5A61D, #B6744A`


    @example
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {packages: ['corechart']});
        google.charts.setOnLoadCallback(drawChart);

          // Callback that creates and populates a data table,
          // instantiates the pie chart, passes in the data and
          // draws it.
        function drawChart() {

            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 15],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);
            // Create the data table.
            var data2 = new google.visualization.DataTable();
            data2.addColumn('string', 'Year');
            data2.addColumn('number', 'Sales');
            data2.addColumn('number', 'Expenses');
            data2.addRows([
              ['2004', 1000, 400],
              ['2005', 1170, 460],
              ['2006',  860, 580],
              ['2007', 1030, 540]
            ]);
            // Create the data table.
            var data3 = new google.visualization.DataTable();
            data3.addColumn('string', 'Month');
            data3.addColumn('number', 'Future Bookings');
            data3.addColumn('number', 'Percentage Occupied');
            data3.addColumn('number', 'Percentage Unoccupied');
            data3.addRows([
              ['March', 180, 0.8, 0.2],
              ['April', 22, 0.45, 0.55],
              ['May',  79, 0.35, 0.65],
              ['June', 10, 0.25, 0.75]
            ]);
            // Set chart options
           var defaultColors = ['#8F7EC2', '#2598B8', '#5FC782', '#ECDE31', '#F55949', '#AE85D4', '#5FC2C2', '#9ACC54', '#F5A61D', '#B6744A'];
           var comboColors = ['#ECDE31', '#8F7EC2', '#2598B8', '#5FC782', '#F55949', '#AE85D4', '#5FC2C2', '#9ACC54', '#F5A61D', '#B6744A'];
           var bookingsColors = ['#ECDE31', '#2598B8', '#EEEEEE'];
           var defaultOptions = {
                colors: defaultColors,
                backgroundColor: 'transparent',
                height: 300,
                //is3D: true,
                fontName: 'Lato',
                fontSize: 13,
                pointSize: '5',
                pointShape: {
                    type: 'circle'
                },
                titleTextStyle: {
                    fontName: 'LatoBold',
                    fontSize: 14
                },
                vAxis: {
                    gridlines: {
                    count: 4
                    },
                    titleTextStyle: {
                        fontSize: 10,
                        color: '#AAAAAA',
                        fontName: 'LatoBold',
                        italic: false
                    }
                },
                hAxis: {
                    titleTextStyle: {
                        fontSize: 10,
                        color: '#AAAAAA',
                        fontName: 'LatoBold',
                        italic: false
                    },
                    slantedText: true
                }
            };
            var options1 = {
                title: 'Popularity of Pizza Toppings'
            };
            var options2 = {
                title: 'Popularity of Pizza Toppings by Slice',
                vAxis: {
                    title: 'PIZZA TOPPINGS'
                },
                hAxis: {
                    title: '# OF SLICES'
                }
            };
            var options3 = {
                title: 'Sales vs Expenditures',
                vAxis: {
                    title: 'AMOUNT OF DOLLARS (USD)'
                },
                hAxis: {
                    title: 'YEAR'
                },
                focusTarget: 'category'
            };
            var options4 = {
                colors: bookingsColors,
                title: 'Future Bookings vs %Occupied',
                isStacked: true,
                hAxis: {
                    title: 'Month'
                    },
                 series: {
                    0: {
                        targetAxisIndex: 0
                        },
                    1: {
                    type: 'bars',
                    targetAxisIndex: 1,
                    },
                    2: {
                    type: 'bars',
                    targetAxisIndex: 1                 
                    }
                 },
                vAxes:{
                    0: {
                        title: 'Future Bookings',
                        format: '#,###'
                        },
                    1: {
                        title: 'Percentage Occupied',  
                        format: 'percent',
                        viewWindow: {
                            max: 1
                            }
                        }
                    }
            };

            // Instantiate and draw our charts, passing in some options. Add reSize function to make charts responsive
            function reSize () {
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, $.extend(true, {}, defaultOptions, options1));
            var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));
            chart2.draw(data, $.extend(true, {}, defaultOptions, options2));
            var chart3 = new google.visualization.LineChart(document.getElementById('chart_div3'));
            chart3.draw(data2, $.extend(true, {}, defaultOptions, options3));
            var chart4 = new google.visualization.PieChart(document.getElementById('chart_div4'));
            chart4.draw(data, $.extend(true, {}, defaultOptions, options1));
            var chart5 = new google.visualization.BarChart(document.getElementById('chart_div5'));
            chart5.draw(data, $.extend(true, {}, defaultOptions, options2));
            var chart6 = new google.visualization.LineChart(document.getElementById('chart_div6'));
            chart6.draw(data2, $.extend(true, {}, defaultOptions, options3));
            var chart7 = new google.visualization.LineChart(document.getElementById('chart_div7'));
            chart7.draw(data3, $.extend(true, {}, defaultOptions, options4));            
            }
            window.onload = reSize();
            window.onresize = reSize;
          }
    </script>
    <h3>Pie Chart</h3>
    <div id="chart_div"></div>

    <h3>Bar Chart</h3>
    <div id="chart_div2"></div>

    <h3>Line Chart</h3>
    <div id="chart_div3"></div>

    <h3>Dashboard Charts</h3>
    <div class="row">
       <div class="col-md-6">
          <div class="dashboard-widget">
             <h4 class="dashboard-widget-title">
                Dashboard Pie Chart
             </h4>
             <div id="chart_div4"></div>
          </div>
       </div>

       <div class="col-md-6">
          <div class="dashboard-widget">
             <h4 class="dashboard-widget-title">
                Dashboard Bar Chart
             </h4>
             <div id="chart_div5"></div>
          </div>
       </div>
    </div>

    <div class="row">
       <div class="col-md-6">
          <div class="dashboard-widget">
             <h4 class="dashboard-widget-title">
                Dashboard Line Chart
             </h4>
             <div id="chart_div6"></div>
          </div>
       </div>
    </div>

    <div class="row">   
       <div class="col-md-12">
          <div class="dashboard-widget">
             <h4 class="dashboard-widget-title">
                Future Bookings Chart
             </h4>
             <div id="chart_div7"></div>
          </div>
       </div>       
    </div>


### Modals

- Modals use standard bootstrap modal markup.
- `.modal-sm` and `.modal-lg` are used for small and large modals. Modals are medium-sized by default.
- Small modals may have no more than 2 Calls to Action.
- If a modal contains a Delete action, use `.btn-delete` to apply appropriate styles and float it to the left.


    @example
    <!-- Trigger the modal with a button -->
    <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#smModal">Small Modal 1CTA
    </button>
    <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#smModal2">Small Modal 2CTA
    </button>
    <br />
    <br />
    <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#mdModal">Meduim Modal 1CTA
    </button>
    <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#mdModal2">Meduim Modal 2CTA
    </button>
    <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#mdModal3">Meduim Modal 3CTA
    </button>
    <br />
    <br />
    <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#lgModal">Large Modal 1CTA
    </button>
    <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#lgModal2">Large Modal 2CTA
    </button>
    <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#lgModal3">Large Modal 3CTA
    </button>
    <br />
    <br />
    <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#deleteModal">Modal with Delete
    </button>

    <!-- Small Modal One CTA -->
    <div id="smModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-sm">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the small modal.</p>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary">Primary CTA
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Small Modal Two CTAs -->
    <div id="smModal2" class="modal fade" role="dialog">
      <div class="modal-dialog modal-sm">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the small modal.</p>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary">Primary CTA
            </button>
            <button
                type="button"
                class="btn btn-link"
                data-dismiss="modal">Link
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Medium Modal 1CTA -->
    <div id="mdModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the medium modal.</p>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary">Primary CTA
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Medium Modal 2CTA -->
    <div id="mdModal2" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the medium modal.</p>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary">Primary CTA
            </button>
            <button
                type="button"
                class="btn btn-link">Link
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Medium Modal 3CTA -->
    <div id="mdModal3" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the medium modal.</p>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary">Primary CTA
            </button>
            <button
                type="button"
                class="btn btn-secondary">Secondary CTA
            </button>
            <button
                type="button"
                class="btn btn-link"
                data-dismiss="modal">Link
            </button>
          </div>
        </div>
      </div>
    </div>


    <!-- Large Modal 1CTA-->
    <div id="lgModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the large modal.</p>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary">Primary CTA
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Large Modal 2CTA-->
    <div id="lgModal2" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the large modal.</p>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary">Primary CTA
            </button>
            <button
                type="button"
                class="btn btn-link">Link
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Large Modal 3CTA-->
    <div id="lgModal3" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the large modal.</p>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary">Primary CTA
            </button>
            <button
                type="button"
                class="btn btn-secondary">Secondary CTA
            </button>
            <button
                type="button"
                class="btn btn-link"
                data-dismiss="modal">Link
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Button-->
    <div id="deleteModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the large modal.</p>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-primary">Primary CTA
            </button>
            <button
                type="button"
                class="btn btn-secondary">Secondary CTA
            </button>
            <button
                type="button"
                class="btn btn-delete"
                data-dismiss="modal">Delete
            </button>
          </div>
        </div>
      </div>
    </div>



###Tooltips


- Tooltips are controlled with the `data-toggle` and `title` attributes.
- Position tooltips with `data-placement` attribute.


    @example
    <button
        type="button"
        class="btn btn-xs btn-primary"
        data-toggle="tooltip"
        data-placement="left"
        title="Tooltip on left">Tooltip on left
    </button>
    <button
        type="button"
        class="btn btn-xs btn-primary"
        data-toggle="tooltip"
        data-placement="top"
        title="Tooltip on top">Tooltip on top
    </button>
    <button
        type="button"
        class="btn btn-xs btn-primary"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Tooltip on bottom">Tooltip on bottom
    </button>
    <button
        type="button"
        class="btn btn-xs btn-primary"
        data-toggle="tooltip"
        data-placement="right"
        title="Tooltip on right">Tooltip on right
    </button>



###Pagination


- Standard bootstrap pagination applies
- Classes `.disabled` and `.active` are applied to li elements.


    @example
    <nav>
      <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous First Page">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&lsaquo;</span>
          </a>
        </li>
        <li>
            <a href="#">1</a>
        </li>
        <li>
            <a href="#">2</a>
        </li>
        <li>
            <a href="#">3</a>
        </li>
        <li>
            <a href="#">4</a>
        </li>
        <li class="active">
            <a href="#">5</a>
        </li>
        <li class="disabled">
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&rsaquo;</span>
          </a>
        </li>
        <li class="disabled">
          <a href="#" aria-label="Next Last Page">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>


###Filters


- Filter bar for Rep and Surveys


    @example
    <div class="row main-filter-bar">
        <div class="col-md-12">
        <div class="form-group">
            <label>Views / <a href="#">Save as View</a></label>
            <select class="selectpicker form-control" title="Default View">
                <option value="1">View 1</option>
                <option value="2">View 2</option>
                <option value="3">View 3</option>
            </select>
        </div>
         <div class="form-group">
            <label>Filter Label</label>
            <input type="text" class="form-control" />
        </div>
        <div class="form-group">
            <label class="control-label">Date Picker</label>
            <input type="text" class="form-control" ng-model="selectedDate" name="date" bs-datepicker/>
        </div>    
        <div class="form-group">
            <label>Select with Search Box</label>
            <select class="form-control selectpicker" data-live-search="true" title="Search Options">
              <option value="0">select with search</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
        </div>
        <div class="form-group">
            <label>Select One</label>
            <select class="selectpicker form-control" title="Select One">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>
        <div class="form-group">
            <label>Select Multiple</label>
            <select class="form-control selectpicker" multiple title="Select Multiple">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>  
        <div class="form-group apply-filters">
            <button class="btn btn-primary btn-sm">Apply Filter</button>
        </div>
        </div>
    </div>


### Integration


- Add the unification repo (`git@github.com:revinate/unification`) to your project, preferably with bower;
- Copy `css_images/` & `fonts/` directories to the root of the public folder;
- In the head of every page, make sure you have `link` tags to `css/bootstrap.css` & `css/app.css`.
