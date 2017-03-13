(function () {

	'use strict';

	var app = angular.module('main', ['styleguide', 'mgcrea.ngStrap', 'mgcrea.ngStrap.datepicker', 'nya.bootstrap.select', 'daterangepicker', 'datatables', 'datatables.bootstrap']);

	app.controller('MainCtrl', function ($scope, DTOptionsBuilder, DTColumnBuilder) {
		$scope.selectedDate = new Date();

		$scope.angularUiSwitch = {
			example1: true,
			example2: false,
			example3: true,
			example4: true,
			example5: true,
		};

		$scope.onChangeExample3 = function(value) {
			$scope.angularUiSwitch.example3 = !$scope.angularUiSwitch.example3;
		}

		$scope.datePicker = {
			date: {
				startDate: '02/02/2016',
				endDate: '03/03/2016'
			},
			options: {
				applyClass: 'btn-primary',
				cancelClass: 'btn-link'
			}
		};

		$scope.selectedItem = "1";
		$scope.selectedItems = ['1'];

		$scope.selects = [
		  {
		    "id": "1",
		    "name": "<i class=\"icon-star\"></i>&nbsp;foo"
		  },
		  {
		    "id": "2",
		    "name": "<i class=\"icon-heart\"></i>&nbsp;bar"
		  },
		  {
		    "id": "3",
		    "name": "<i class=\"icon-fire\"></i>&nbsp;baz"
		  },
		  {
		    "id": "4",
		    "name": "<i class=\"icon-globe\"></i>&nbsp;qux"
		  }
		];

		$scope.options = [ 'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo' ];

		$scope.optgroupSelect = [
		  {name: 'Alice', class: 'Class A'},
		  {name: 'Bob', class: 'Class B'},
		  {name: 'Carl', class: 'Class A'},
		  {name: 'Daniel', class: 'Class B'},
		  {name: 'Emi', class: 'Class A'},
		  {name: 'Flank', class: 'Class B'},
		  {name: 'George', class: 'Class C'},
		  {name: 'Harry', class: 'Class C'}
		];

    $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap();

	});

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

	/**
	 * DOCUMENT READY jQuery - for reference on R&S
	 */

	$(document).ready(function(){

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

		/**
		 * This controls the mobile range slider numbers
		 */
		$('.r_range_slider').on('input change', function() {
			var min = $(this).attr('min');
			var max = $(this).attr('max');
			var thisVal = $(this).val();
			var rangeForClass = max - min + 1;
			var hintClassRange = 'range-' + rangeForClass + '-point';
			//the value must go from 0 to n-1 where n is the length of range.
			//this is to make it the same for the range 1..3 and the range 0..10
			var valueForClass = thisVal - min;
			var hintClassValue = 'value-' + valueForClass;

			$(this).parent().prev('div').find('li').removeClass('selected');
			var liElement = $(this).parent('div').find('ul li');
			for (var i = 0; i < rangeForClass; i++) {
				liElement.removeClass('value-' + i);
			}
			liElement.addClass('selected').addClass(hintClassRange).addClass(hintClassValue).html($(this).val());
			if ($(this).hasClass('r_nps_slider')) {
				$('.r_nps_' + $(this).val()).attr('checked', true).parents('li').addClass('selected');
			} else {
				/*the .change() is to trigger the on change function for the inputs*/
				$('.r_range_' + $(this).attr('data-question-id') + '_' + $(this).val()).attr('checked', true).change().parents('li').addClass('selected');
			}
		});

		/**
		 * Override Default Modal Options to prevent closing when clicked outside of the modal or press the escape key
 		 */
		$('.modal').on('show.bs.modal', function(){
			$(this).data('bs.modal').options.keyboard = false;
			$(this).data('bs.modal').options.backdrop = 'static';
		});

        /**
		 * Global alert demo
         */
        $('.trigger-global-alert').on('click', function(){
        	var globalContainer = $('.global-alert-container');
        	var alertHtml = '<div class="alert alert-success fade in">' +
                '<strong>' +
                'Success! ' +
                '</strong>' +
                'This global alert box could indicate a success message.' +
                '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
                '</div>';
        	globalContainer.append(alertHtml);
        	setTimeout(function(){
                globalContainer.empty();
        	}, 10000);
            return false;
			});
	});

}());
