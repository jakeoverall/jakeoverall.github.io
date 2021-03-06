var sandbox = angular.module('sandbox', ['firebase', 'ui.router', 'ui.gravatar', 'restangular', 'ngSanitize']);


//Routes
sandbox.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'app/views/main.html',
            controller: 'mainCtrl',
            resolve: {
                postsRef: function (firebaseService) {
                    return firebaseService.getPosts();
                }
            }
        })
        .state('post', {
            url: '/post/:postId',
            templateUrl: 'app/views/post.html',
            controller: 'postCtrl',
            resolve: {
                postRef: function(firebaseService, $stateParams) {
                    return firebaseService.getPost($stateParams.postId);
                },
                commentsRef: function(firebaseService, $stateParams) {
                    return firebaseService.getComments($stateParams.postId);
                }
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html',
            controller: 'loginCtrl',
        })
        .state('secure', {
            url: '/secure',
            abstract: true,
            template: '<div ui-view></div>',
            controller: 'secureCtrl',
            resolve: {
                userRef: function(authService) {
                    return authService.getUser();
                },
                postsRef: function(firebaseService) {
                    return firebaseService.getPosts();
                }
            }
        })
        .state('secure.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/views/dashboard.html',
            controller: 'dashboardCtrl',
        })
        .state('secure.post', {
            url: '/post/:postId',
            templateUrl: 'app/views/post.html',
            controller: 'postCtrl',
            resolve: {
                postRef: function (firebaseService, $stateParams) {
                    return firebaseService.getPost($stateParams.postId);
                },
                commentsRef: function (firebaseService, $stateParams) {
                    return firebaseService.getComments($stateParams.postId);
                }
            }
        })
        .state('secure.newPost', {
            url: '/post',
            templateUrl: 'app/views/post-form.html',
            controller: 'newPostCtrl',
            resolve: {
                postRef: function (firebaseService) {
                    function uniqueId() {
                        var text = "";
                        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                        for (var i = 0; i < 15; i++)
                            text += possible.charAt(Math.floor(Math.random() * possible.length));

                        return text;
                    }
                    return firebaseService.getPost(uniqueId());
                }
            }
        })
        .state('secure.editPost', {
            url: '/editpost/:postId',
            templateUrl: 'app/views/post-form.html',
            controller: 'newPostCtrl',
            resolve:{
                postRef: function(firebaseService, $stateParams){
                    return firebaseService.getPost($stateParams.postId);
                }
            }
        });
}]);

$(document).ready(function() {
    function showHiddenParagraphs() {
        $("p.hidden").fadeIn(500);
    }
    setTimeout(showHiddenParagraphs, 1000);
});