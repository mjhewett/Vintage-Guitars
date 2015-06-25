;(function () {

'use strict';

angular.module('Guitars', ['ngRoute'])

.constant('PARSE', {

  URL: 'https://api.parse.com/1/',
  CONFIG: {
    headers: {

      'X-Parse-Application-Id' : 'ShWkWAR0My9JW76mVc5A0OdFoFWEQEKRZrI8yUTI',
      'X-Parse-REST-API-Key' : 'pXG28fpppsarp1Ojgr5AOXZAUcbB3OhBBAVSznQF'
    }
  }

})

.config( ['$routeProvider',

function ($routeProvider){

    $routeProvider.when('/', {

      controller: 'GuitarPage',
      templateUrl: 'js/home.tpl.html'

    })


  .when('/add', {

    controller: 'GuitarPage',
    templateUrl : 'js/add.tpl.html'

  })

  .when('/about', {

    controller: 'GuitarPage',
    templateUrl: 'js/about.tpl.html'
    });

  }

]);

}());













