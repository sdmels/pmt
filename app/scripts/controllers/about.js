'use strict';

/**
 * @ngdoc function
 * @name pmtApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pmtApp
 */
angular.module('pmtApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
