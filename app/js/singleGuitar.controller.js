;(function () {

'use strict';

angular.module('Guitars')

.controller('SingleCtrl', ['$scope', '$http', 'gitFactory', '$routeParams',

  function ($scope, $http, gitFactory, $routeParams) {


    gitFactory.getSingle($routeParams.gid).success( function (data) {

      $scope.g = data;

    });

    $scope.deleteMe = function (x) {

      gitFactory.deleteMe(x).success( function (x) {

        $scope.g = _.without($scope.g, x);

      });

    };


  }]);


}());







