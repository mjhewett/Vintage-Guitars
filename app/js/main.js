;(function () {

'use strict';

angular.module('Guitars', ['ngRoute'])

.constant('PARSE', {

  URL: 'https://api.parse.com/1/',
  config: {
    headers: {

      'X-Parse-Application-Id' : 'ShWkWAR0My9JW76mVc5A0OdFoFWEQEKRZrI8yUTI',
      'X-Parse-REST-API-Key' : 'pXG28fpppsarp1Ojgr5AOXZAUcbB3OhBBAVSznQF'
    }
  }

})

.config( ['$routeProvider'

function ($routeProvider){


}

]);











}());
