var app = angular.module('sandbox');

app.controller('addPostCtrl', ['$scope', '$state', function($scope, $state) {

    $scope.savePost = function() {
        $scope.posts.$save($scope.post);
    };

    $scope.togglePost = function() {
        $scope.post.active = !$scope.post.active;
        $scope.posts.$save($scope.post);
    };

}]);