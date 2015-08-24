'use strict';

/**
 * @ngdoc function
 * @name gemStoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gemStoreApp
 */
angular.module('gemStoreApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
