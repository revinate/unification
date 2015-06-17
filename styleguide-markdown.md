Revinate Style Guide
=================

Our styleguide/css is based off of Twitter Bootstrap. The documentation below highlights the customizations and extra
 classes you need to add to your project.


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

The primary navigation component is based off of Twitter Bootstrap tabs plugin. The tabs navigation is inside `
.l-header-top` and the tabs content is inside `.l-header-bottom`. In order to have custom styles, the following 2
classes are needed:

`.primary-menu-item-bordered` ads border to the right aligned menu items and
`.primary-menu-item-icon` is needed for menu items the use icon like "Help" and "Settings"

    @example
    <header class="l-header">
    <div class="l-header-top">
      <div class="container">

        <ul class="primary-menu nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Dashboard</a>
          </li>
          <li
            role="presentation">
            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Feedback</a>
          </li>
          <li
            role="presentation">
            <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Marketing</a>
          </li>
          <li role="presentation">
            <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Management</a>
          </li>
          <li role="presentation" class="pull-right">
            <a href="#settings" class="primary-menu-item-bordered" aria-controls="settings" role="tab"
               data-toggle="tab">
              <span class="label label-success">On duty</span>
            </a>
          </li>
          <li role="presentation" class="dropdown pull-right">
            <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon" data-toggle="dropdown"
               href="#"
               role="button"
               aria-expanded="false">
              <i class="fa fa-gear"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li role="presentation" class="dropdown pull-right">
            <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon" data-toggle="dropdown" href="#"
               role="button" aria-expanded="false">
              <i class="fa fa-question-circle"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
          <li role="presentation" class="dropdown pull-right">
            <a class="dropdown-toggle primary-menu-item-bordered" data-toggle="dropdown" href="#" role="button"
               aria-expanded="false">
              Property <i class="fa fa-angle-down"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
            </ul>
          </li>
        </ul>

      </div>
    </div>

    <div class="l-header-bottom">
      <div class="container">

        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="home"></div>
          <div role="tabpanel" class="tab-pane" id="profile">Feedback</div>
          <div role="tabpanel" class="tab-pane" id="messages">Marketing</div>
          <div role="tabpanel" class="tab-pane" id="settings">Management</div>
        </div>

      </div>
    </div>

  </header>


Buttons
-------

### Default Buttons

Create all types of buttons with the following code snippets.

    @example
    button.btn.btn-default Default
    button.btn.btn-primary Default
    button.btn.btn-success Default
    button.btn.btn-danger Default
    button.btn.btn-warning Default
    button.btn.btn-info Default
    button.btn.btn-link Default

### Dropdown Buttons

Create all types of buttons with the following code snippets.

    @example
    button.btn.btn-default Default
    button.btn.btn-primary Default
    button.btn.btn-success Default
    button.btn.btn-danger Default
    button.btn.btn-warning Default
    button.btn.btn-info Default
    button.btn.btn-link Default

### Icon Buttons

Create all types of buttons with the following code snippets.

    @example
    button.btn.btn-default Default
    button.btn.btn-primary Default
    button.btn.btn-success Default
    button.btn.btn-danger Default
    button.btn.btn-warning Default
    button.btn.btn-info Default
    button.btn.btn-link Default