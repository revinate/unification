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

}());
