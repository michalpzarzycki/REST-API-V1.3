

(function () {
var app = angular.module('mainController', ['mainModule']);
app.controller('PostsController', function($http,posts,comments,albums,photos,todos,users,$scope) {

    var vm = this;

    $scope.lol = 0;
    
    vm.posts = false;
    vm.comments = false;
    vm.albums = false;
    vm.photos = false;
    vm.todos = false;
    vm.users = false;
    
    
        vm.postsfromapiservice = {};
        vm.commentsfromapiservice = {};
        vm.albumsfromapiservice = {};
        vm.photosfromapiservice = {};
        vm.todosfromapiservice = {};
        vm.usersfromapiservice = {};
        vm.choosenPost = {};
    
    
            posts.findall({}, function(data) {
					vm.postsfromapiservice.items = data;
				});
    
    
            comments.findall({}, function(data) {
					vm.commentsfromapiservice.items = data;
				});
    
    
            albums.findall({}, function(data) {
					vm.albumsfromapiservice.items = data;
				});
    
    
            photos.findall({}, function(data) {
					vm.photosfromapiservice.items = data;
				});
    
    
            todos.findall({}, function(data) {
					vm.todosfromapiservice.items = data;
				});
		   
			users.findall({}, function(data) {
					vm.usersfromapiservice.items = data;
				});
				
			vm.choose = function(id)
			{	
				posts.find({id: id}, function(data) {
					vm.choosenPost = data;
					
				});		
}})
})();

