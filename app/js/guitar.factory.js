;(function () {

'use strict';

  angular.module('Guitars')

  .factory('gitFactory', ['$http', '$location', 'PARSE',

      function ($http, $location, PARSE) {

        var getGuit = function () {

          return $http.get(PARSE.URL + 'classes/guitars', PARSE.CONFIG);

        };



        var addGuit = function (guits) {

          $http.post(PARSE.URL + 'classes/guitars', guits, PARSE.CONFIG)
          .success( function (){

          $location.path('/');

            // return $http.post(PARSE.URL + 'classes/guitars' + PARSE.CONFIG)

          });

        };

        var getSingle = function (gid){
          return $http.get(PARSE.URL + 'classes/guitars' + gid, PARSE.CONFIG);
        };



        return {

          getGuit: getGuit,
          addGuit: addGuit,
          getSingle: getSingle
        };


      }

    ]);

}());






