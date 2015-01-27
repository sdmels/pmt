'use strict';

/**
 * @ngdoc function
 * @name pmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pmtApp
 */
angular.module('pmtApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
