'use strict';

angular.module('sandbox')
  .service('firebaseService', function (environmentService, $firebase) {

      var firebaseUrl = environmentService.getEnv().firebase;

      return {
          getProfile:function (userId) {
              return $firebase(new Firebase(firebaseUrl + '/users/' + userId)).$asObject().$loaded().then(function (res) {
                  return res;
              });
          },
          getPosts: function () {
              return $firebase(new Firebase(firebaseUrl + '/db/posts'));
          },
          getPost: function (postId) {
              return $firebase(new Firebase(firebaseUrl + '/db/posts/' + postId));
          },
          getComments: function(postId) {
              return $firebase(new Firebase(firebaseUrl + '/db/posts/' + postId + '/comments'));
          }
      };
  });
