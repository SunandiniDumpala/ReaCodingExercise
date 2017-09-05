angular.module("Rea").controller("dataController",['$scope', '$http',function($scope,$http){
	$http.get('data.json').then(function(response) {
        $scope.myData = JSON.stringify(response.data);
        console.log($scope.myData);
         }, function myError(response) {
        $scope.myData = response.statusText;
    });
}]);