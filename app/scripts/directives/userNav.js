'use strict';

var app = angular.module('sandbox');

app.directive('userNav', function () {
    return {
        restrict: 'AE',
        templateUrl: 'app/views/user-nav.html',
        controller: 'userNavCtrl'
    };
});