angular.module('starter.controllers', [])

.controller('FavoritesController', function($scope, $ionicModal, Chats) {
	$scope.contacts = Chats.all();

	$scope.edit = function(){
		$scope.showDelete = !$scope.showDelete;
	};

	$scope.remove = function(contact) {
    	Chats.remove(contact);
  	};

  	$ionicModal.fromTemplateUrl('templates/listContacts.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
  	}).then(function(modal) {
    	$scope.modal = modal;
  	});

  	$scope.openModal = function() {
    	$scope.modal.show();
  	};
  	
  	$scope.closeModal = function() {
    	$scope.modal.hide();
  	};

  	$scope.done = function(){
  		$scope.closeModal();
  	};
})

.controller('ContactsController', function($scope, $ionicModal, $cordovaContacts, Chats) {
  $scope.contacts = Chats.all();
  $scope.remove = function(contact) {
    Chats.remove(contact);
  };

  // debugger
  // $cordovaContacts.find({filter: ''}).then(function(result) {
  //     // Contact saved
  //     console.log(result);
  //   }, function(err) {
  //     // Contact error
  //     console.log(err);
  //   });

  $ionicModal.fromTemplateUrl('templates/addContact.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
  	console.log('inside openModal');
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.done = function(){
  	$scope.closeModal();
  };
})

.controller('ChatsController', function($scope, $ionicModal, Chats) {
  	$scope.chats = Chats.all();
  	$scope.remove = function(chat) {
    	Chats.remove(chat);
  	};

  	$ionicModal.fromTemplateUrl('templates/listContacts.html', {
	    scope: $scope,
	    animation: 'slide-in-up'
  	}).then(function(modal) {
    	$scope.modal = modal;
  	});

  	$scope.openModal = function() {
    	$scope.modal.show();
  	};
  	
  	$scope.closeModal = function() {
    	$scope.modal.hide();
  	};

  	$scope.done = function(){
  		$scope.closeModal();
  	};

  	$scope.edit = function(){
		$scope.showDelete = !$scope.showDelete;
  	};

	$scope.remove = function(contact) {
		Chats.remove(contact);
	};
})

.controller('ChatDetailController', function($scope, $stateParams, $ionicHistory, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

  $scope.goBack = function(){
    	$ionicHistory.goBack();
  	};
})

.controller('SettingsController', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('RecentsController', function($scope, Chats) {
  $scope.contacts = Chats.all();

	$scope.edit = function(){
		$scope.showDelete = !$scope.showDelete;
	}

	$scope.remove = function(contact) {
    	Chats.remove(contact);
  	}
});
