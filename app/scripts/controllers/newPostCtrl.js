var app = angular.module('sandbox');

app.controller('newPostCtrl', ['$scope', '$state', 'postRef', function ($scope, $state, postRef) {

    var converter = new Showdown.converter();

    $scope.postingActions = true;

    $scope.post = postRef.$asObject();

    $scope.savePost = function () {
        $scope.post.author = $scope.profile.name;
        $scope.post.email = $scope.profile.email;
        $scope.post.date = new Date().toISOString();
        $scope.post.snippet = $scope.post.renderedBody.slice(0, 400);
        $scope.post.$save($scope.post);
    };

    $scope.convertTitle = function () {
        var title = '#' + $scope.post.mTitle;
        var htmlText = converter.makeHtml(title);
        $scope.post.renderedTitle = htmlText;
    };

    $scope.convert = function () {
        if ($scope.post.markdown) {
            var htmlText = converter.makeHtml($scope.post.markdown);
            $scope.post.renderedBody = htmlText;
        }
    };

    $scope.publish = 'Publish';

    $scope.togglePost = function () {
        debugger;
        if ($scope.publish === 'Publish') {
            $scope.post.active = true;
            $scope.publish = 'Disable';
        } else {
            $scope.publish = 'Publish';
            $scope.post.active = false;
        }
        $scope.post.$save($scope.post);
    };
}]);