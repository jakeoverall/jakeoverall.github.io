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
            controller: 'newPostCtrl'
        })
        .state('secure.editPost', {
            url: '/post/:postId',
            templateUrl: 'app/views/post-form.html',
            controller: 'editPostCtrl',
            resolve:{
                postRef: function(firebaseService, $stateParams){
                    return firebaseService.getPost($stateParams.postId);
                }
            }
        });
}]);