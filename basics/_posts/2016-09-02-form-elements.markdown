---
layout: post
title: "Form Elements"
date: 2016-09-02 00:00:03
---

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
                <span class="dropdown-header">{{group}}</span>
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