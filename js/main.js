(function () {

	'use strict';

	var app = angular.module('main', ['mgcrea.ngStrap', 'mgcrea.ngStrap.datepicker']);

	app.controller('MainCtrl', function ($scope) {
		$scope.selectedDate = new Date();

	});

}());