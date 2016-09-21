---
layout: post
title: "Primary Menu"
date: 2016-09-12 00:00:03
desc: "
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
"
---

<header class="l-header">
  <div class="l-header-top">
    <div class="container">
      <ul class="primary-menu nav nav-tabs" role="tablist">
        <li class="primary-menu-item-logo primary-menu-item-text">
          <span class="logo" title="Revinate">
            <i class="revicon-revinate-logo"></i>
          </span>
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
        <li class="dropdown pull-right primary-menu-item-icon" title="Settings" data-toggle="tooltip" data-placement="bottom">
          <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon" data-toggle="dropdown" href="#" aria-expanded="false">
            <i class="fa fa-gear"></i>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">Action</a>
            </li>
            <li class="active">
              <a href="#">Action Active</a>
            </li>
            <li class="is-superadmin">
              <a href="#">SuperAdmin action</a>
            </li>
          </ul>
        </li>
        <li class="dropdown pull-right primary-menu-item-icon" title="Help & Feedback" data-toggle="tooltip" data-placement="bottom">
          <a class="dropdown-toggle primary-menu-item-bordered primary-menu-item-icon" data-toggle="dropdown" href="#" role="button"
          aria-expanded="false">
            <i class="fa fa-question-circle"></i>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Another action</a>
            </li>
          </ul>
        </li>
        <li class="dropdown pull-right prop-selector always-active">
          <a class="dropdown-toggle primary-menu-item-bordered" data-toggle="dropdown" href="#" aria-expanded="false">
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
                  <span class="focus">
                    <i class="icon icon_magnifying_glass"></i>
                  </span>
                </li>
              </ul>
              <div class="contact-autocomplete">
                <ul>
                  <li>Property one</li>
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
          <i class="fa fa-user mg-r-xs"></i>All Feedback
        </button>
        <div class="btn-group mg-r-sm">
          <button type="button" class="btn btn-primary btn-header dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-heart mg-r-xs"></i>Sentiment Analysis
            <i class="fa fa-caret-down mg-l-xs"></i>
            <span class="badge badge-danger pull-right mg-l-sm">42</span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a class="has-badge" href="#">Action
                <span class="badge badge-default">6</span>
              </a>
            </li>
            <li>
              <a class="has-badge" href="#">Another action
                <span class="badge badge-default">40</span>
              </a>
            </li>
            <li>
              <a class="has-badge" href="#">Something else here this is very large
                <span class="badge badge-default">12</span>
              </a>
            </li>
            <li>
              <a class="has-badge" href="#">Separated link
                <span class="badge badge-default">212</span>
              </a>
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary btn-header btn-rounded pull-right mg-l-sm">
          <i class="fa fa-book mg-r-xs"></i>Guests
        </button>
        <button type="button" class="btn btn-primary btn-header btn-circle pull-right mg-l-sm">
          <i class="fa fa-bookmark"></i>
        </button>
        <button type="button" class="btn btn-primary btn-header btn-circle pull-right mg-l-sm">
          <i class="fa fa-star"></i>
        </button>
      </div>
      <!-- marketing tab content -->
      <div role="tabpanel" class="tab-pane" id="marketing">
        <button type="button" class="btn btn-primary btn-header active mg-r-sm">
          <i class="fa fa-paper-plane mg-r-xs"></i>Campaigns
        </button>
        <button type="button" class="btn btn-primary btn-header mg-r-sm">
          <i class="fa fa-list-alt mg-r-xs"></i>List
        </button>
      </div>
    </div>
  </div>
</header>