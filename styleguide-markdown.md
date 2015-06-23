General
-------

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

This component is based off of Twitter Bootstrap tabs plugin. The tabbed menu is inside `.l-header-top` and the
tabbed content is inside `.l-header-bottom`.

**Extra classes**
- `.primary-menu-item-bordered` adds a border to right menu items
- `.primary-menu-item-icon` needed by icon menu items. i.e. 'Help' & 'Settings'
- `.primary-menu-item-logo` needed by the logo `li`
- `.primary-menu-item-text` needed by text only `li`. i.e. property name w/o dropdown
- `.primary-menu-item-label` needed by `li` that contains a `.label`. i.e. 'On Duty'


**jQuery vs Angular**
- If you wish to use this component with **jQuery**, make sure the primary menu 'a' tags have the attribute
`data-toggle='tab'`, otherwise remove the attribute.


    @example
    <header class="l-header">
    <div class="l-header-top">
      <div class="container">

        <ul class="primary-menu nav nav-tabs" role="tablist">
          <li class="primary-menu-item-logo">
            <a class="logo" href="#dashboard">Revinate</a>
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
            <span class="label label-success">On duty</span>
          </li>
          <li class="dropdown pull-right">
            <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon" data-toggle="dropdown"
               href="#" aria-expanded="false">
              <i class="fa fa-gear"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li class="dropdown pull-right">
            <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon" data-toggle="dropdown" href="#"
               aria-expanded="false">
              <i class="fa fa-question-circle"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li class="dropdown pull-right">
            <a class="dropdown-toggle primary-menu-item-bordered" data-toggle="dropdown" href="#"
               aria-expanded="false">
              Property <i class="fa fa-angle-down"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li class="primary-menu-item-bordered primary-menu-item-text pull-right">Property</li>
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
              <i class="fa fa-heart mg-r-xs"></i> Sentiment Analysis <i class="fa fa-angle-down"></i> <span
              class="badge badge-danger pull-right mg-l-sm">42</span>
            </button>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action <span class="badge badge-default pull-right mg-l-sm">6</span></a></li>
              <li><a href="#">Another action <span class="badge badge-default pull-right mg-l-sm">4</span></a></li>
              <li><a href="#">Something else here <span class="badge badge-default pull-right mg-l-sm">12</span></a></li>
              <li><a href="#">Separated link <span class="badge badge-default pull-right mg-l-sm">2</span></a></li>
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