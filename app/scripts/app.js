'use strict';

/**
 * @ngdoc overview
 * @name gemStoreApp
 * @description
 * # gemStoreApp
 *
 * Main module of the application.
 */
(function() {
  var app = angular.module('gemStore', [
      'store-directives',
      'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
     $http.get('/store-products.json').success(function(data){
        store.products=data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();