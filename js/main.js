(function () {

	'use strict';

	var app = angular.module('main', ['mgcrea.ngStrap', 'mgcrea.ngStrap.datepicker', 'uiSwitch']);

	app.controller('MainCtrl', function ($scope) {
		$scope.selectedDate = new Date();

		$scope.angularUiSwitch = {
			example1: true,
			example2: false,
			example3: true,
			example4: true,
			example5: true,
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

	});

}());
