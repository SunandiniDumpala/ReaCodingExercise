/* Router configuration and injecting dependencies
   @ui.router
*/
angular.module("Rea",["ui.router"]);
angular.module("Rea").config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/index")
	$stateProvider
		.state("index",{
			url:"/index",
			templateUrl:"index.html",
			controller:"dataCtrl",
			controllerAs:"dataCtrlAs"
		})
});