app.controller('landingPageCtrl',['$scope','$location',function($scope,$location){
      $scope.myFuncSignin = function(){
	  	$location.path('/SignIn');
	  };		  
	  $scope.myFunc = function(){
	  	 console.log('asd');
	  	 $location.path('/SignUp');
	  };
}]);
