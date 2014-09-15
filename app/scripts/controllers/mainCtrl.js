var app = angular.module('sandbox');

app.controller('mainCtrl', ['$scope', 'postsRef', '$state', function($scope, postsRef, $state) {

    $scope.posts = postsRef.$asArray();

    $scope.viewPost = function(post) {
        $state.go('post', { postId: post.$id });
    };

}]);