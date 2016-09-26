var app = angular.module('RecipieApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	  .when('/',{
	  	 templateUrl:'./Source/views/landingPage.html',
	  	 controller:'landingPageCtrl'
	  })
	  .when('/SignIn',{
	  	  templateUrl:'./Source/views/signIn.html',
	  	  controller:'SignInCtrl'
	  })
	  .when('/SignUp',{
	  	   templateUrl:'./Source/views/signUp.html',
	  	   controller:'SignUpCtrl'
	  })
});