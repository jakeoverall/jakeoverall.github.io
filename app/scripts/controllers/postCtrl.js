var app = angular.module('sandbox');

app.controller('postCtrl', ['$scope', 'postRef', 'commentsRef', function($scope, postRef, commentsRef) {
    $scope.post = postRef.$asObject();
    $scope.comments = commentsRef.$asArray();

    $scope.addComment = function() {
        $scope.comments.$add($scope.comment);
    };

}]);