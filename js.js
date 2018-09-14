(function(){
 var app = angular.module('mainModule', ['ngResource']);
          app.factory('posts', ['$http','$resource', posts]);
          app.factory('comments', ['$http','$resource', comments]);
          app.factory('albums', ['$http','$resource', albums]);
          app.factory('photos', ['$http','$resource', photos]);
          app.factory('todos', ['$http','$resource', todos]);
          app.factory('users', ['$http','$resource', users]);

   function posts($http,$resource) {       
         var resource = $resource('https://jsonplaceholder.typicode.com/:object/:id', {}, {
                'findall': {method: 'GET', params: {object: 'posts'},isArray:true},
                'find': {method: 'GET', params: {object: 'posts'}}
            });
            return resource;       
        }       
    function comments($http,$resource) {       
         var resource = $resource('https://jsonplaceholder.typicode.com/:object/:id', {}, {
                'findall': {method: 'GET', params: {object: 'comments'},isArray:true},
                'find': {method: 'GET', params: {object: 'comments'}}
            });
            return resource;       
        }       
    function albums($http,$resource) {       
         var resource = $resource('https://jsonplaceholder.typicode.com/:object/:id', {}, {
                'findall': {method: 'GET', params: {object: 'albums'},isArray:true},
                'find': {method: 'GET', params: {object: 'albums'}}
            });
            return resource;       
        }       
    function photos($http,$resource) {       
         var resource = $resource('https://jsonplaceholder.typicode.com/:object/:id', {}, {
                'findall': {method: 'GET', params: {object: 'photos'},isArray:true},
                'find': {method: 'GET', params: {object: 'photos'}}
            });
            return resource;       
        }       
    function todos($http,$resource) {       
         var resource = $resource('https://jsonplaceholder.typicode.com/:object/:id', {}, {
                'findall': {method: 'GET', params: {object: 'todos'},isArray:true},
                'find': {method: 'GET', params: {object: 'todos'}}
            });
            return resource;       
        }       
    function users($http,$resource) {       
         var resource = $resource('https://jsonplaceholder.typicode.com/:object/:id', {}, {
                'findall': {method: 'GET', params: {object: 'users'},isArray:true},
                'find': {method: 'GET', params: {object: 'users'}}
            });
            return resource;       
        }       
 
})();