'use strict';

var app = angular.module('weatherCycle', []);

app.controller('MainCtrl', function ($scope) {
    $scope.items = ['Hey', 'This', 'Is', 'Cool'];
    $scope.clicked = function (msg) {
        //Do some stuff.
        alert(msg);
    };
});