var app = angular.module('sandbox');

app.controller('newPostCtrl', ['$scope', '$state', function ($scope, $state) {

    var converter = new Showdown.converter();
    var e = document.getElementById('markdown');
    $scope.postingActions = true;


    $scope.savePost = function() {
        $scope.posts.$save($scope.post);
    };

    $scope.convertTitle = function () {
        var title = '#' + $scope.title;
        var htmlText = converter.makeHtml(title);
        $scope.renderedTitle = htmlText;
    };

    $scope.convert = function () {
        if($scope.markdown){
            var htmlText = converter.makeHtml($scope.markdown);
            $scope.rendered = htmlText;    
        }  
    };

    $scope.togglePost = function() {
        $scope.post.active = !$scope.post.active;
        $scope.posts.$save($scope.post);
    };

}]);