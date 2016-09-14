---
layout: post
title: "Filter Bar"
date: 2016-09-12 00:00:02
---

<div class="row main-filter-bar">
  <div class="col-md-12">
    <div class="form-group">
      <label>Views /
        <a href="#">Save as View</a>
      </label>
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