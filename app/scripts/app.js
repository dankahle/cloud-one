/// <reference path="../bower_components/angular/angular.js" />
"use strict";

var app = angular.module("app", []);

app.controller("ctrl", function ($scope, $http) {

/*
	$scope.users = [
		{ name: "dank", age: 50 },
		{ name: "carl", age: 60 }
	];
*/


	$http.get(dkGetServiceUrl() + "api/User").success(function (data) {
		$scope.users = data;
	});

});





