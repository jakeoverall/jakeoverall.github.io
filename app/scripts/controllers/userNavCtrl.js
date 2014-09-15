var app = angular.module('sandbox');

app.controller('userNavCtrl', ['$scope', 'firebaseService', function ($scope, firebaseService) {
    firebaseService.getProfile($scope.user.id).then(function (profile) {
        $scope.profile = profile;
    });
}]);