var app = angular.module('sandbox');

app.controller('dashboardCtrl', ['$scope', '$state', function($scope, $state) {

    $scope.editPost = function (post) {
        $state.go('post', { postId: post.$id });
    };

    $scope.removePost = function(post) {
        $scope.posts.$remove(post);
    };

    $scope.togglePost = function(post) {
        post.active = !post.active;
        $scope.posts.$save(post);
    };

    $scope.viewPost = function(post) {
        $state.go('secure.editPost', { postId: post.$id });
    };

}]);