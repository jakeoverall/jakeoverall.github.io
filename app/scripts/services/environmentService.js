'use strict';

angular.module('sandbox')
  .service('environmentService', function ($window) {
      return {
          getEnv: function () {
              return $window.env;
          }
      };
  });