var app = angular.module('sandbox');

app.controller('secureCtrl', ['$scope', 'userRef', 'postsRef', '$state', 'firebaseService', function ($scope, userRef, postsRef, $state, firebaseService) {

    if (!userRef) {
        $state.go('main');
    }

    $scope.user = userRef;
    $scope.posts = postsRef.$asArray();

}]);