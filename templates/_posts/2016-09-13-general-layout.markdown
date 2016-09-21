---
layout: post
title: "General Layout"
date: 2016-09-13 00:00:00
desc: "
This is the overall structure of every page. Content goes inside div with class `.l-main-content`.

Everything inside follows the standard Bootstrap 12-column grid, using `.row` and `.col-xs- .col-sm- .col-md- .col-lg`. Using  `.col-md-*` will stack on mobile and tile on desktop.

- spinner is created using `.spinner` and including `.bounce1 .bounce2 .bounce3` divs.  For M and E, please use the spinner directive.
"
---

<div class="l-app">
  <header class="l-header">
    <div class="l-header-top"></div>
    <div class="l-header-bottom"></div>
  </header>
  <main class="l-main">
    <div class="container">
      <div class="l-main-content pd-md mg-t-xl">
        <ul class="global-actions-nav pull-right">
          <li>
            <a>
              <i class="fa fa-file-pdf-o"></i>
            </a>
          </li>
          <li>
            <i class="fa fa-file-pdf-o"></i>
          </li>
        </ul>
        <!-- content goes here -->
        <p>Content Goes Here</p>
        <div class="row">
          <div class="col-md-12">
            <div class="spinner">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>
          </div>
        </div>
        <div class="row show-grid">
          <div class="col-md-1">
            <p>col-1</p>
          </div>
          <div class="col-md-2">
            <p>col-2</p>
          </div>
          <div class="col-md-3">
            <p>col-3</p>
          </div>
          <div class="col-md-4">
            <p>col-4</p>
          </div>
          <div class="col-md-2">
            <p>col-2</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="l-footer">
    <p class="copyright pd-md copyright">&copy; Revinate 2015. All Rights Reserved.</p>
  </footer>
</div>