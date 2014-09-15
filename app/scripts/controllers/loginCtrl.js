'use strict';

angular.module('sandbox')
  .controller('loginCtrl', ['$scope', '$state', 'firebaseService', 'authService', function ($scope, $state, firebaseService, authService) {

      $scope.reg = true;
      $scope.status = 'Register';

      $scope.showReg = function () {
          if ($scope.reg) {
              $scope.status = 'Log In';
          } else {
              $scope.status = 'Register';
          }
          $scope.reg = !$scope.reg;
          $scope.error = '';
      };

      $scope.logMeIn = function () {

          authService.logIn($scope.user).then(function (res) {
              $state.go('secure.dashboard');
          }, function (error) {
              $scope.error = error.message.slice(20);
          });
      };

      $scope.registerUser = function () {
          authService.register($scope.register);
          $scope.register = '';
          $scope.showReg();
      }, function (error) {
          $scope.error = error.toString();
      };
  }]);