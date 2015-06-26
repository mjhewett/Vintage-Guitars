;(function () {

'use strict';

angular.module('Guitars')


.controller('GuitCtrl', ['$scope','gitFactory' , '$routeParams',


  function ($scope, gitFactory, $routeParams) {


    gitFactory.getGuit().success( function (data) {

      $scope.guits = data.results; //where is guits coming from. ask mike where gigs is? is this where you add a class in parse?

    });


    $scope.addGuit = function (guit) {

      gitFactory.addGuit(guit);

    };


  }

  ]);




}());


