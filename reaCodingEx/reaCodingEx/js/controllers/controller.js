angular.module("Rea").controller("dataController",['$scope', '$http',function($scope,$http){
	$http.get('data.json').then(function(response) {
        $scope.myData = response.data;
        console.log($scope.myData);
         }, function myError(response) {
        $scope.myData = response.statusText;
        });
		     //console.log($scope.myData);
	$scope.addProp = function(data){
		var len=$scope.myData.saved;
		var k=0;
		var x;
		while(k<len.length){
				console.log("saved"+len[k].id);
				console.log("data"+data.id);
			if(len[k].id==data.id){

				x=true;
				alert("Property already added. Cannot add a duplicate");
			}
			else{
				x=false;
			}
			k++;
		};

		if(x==false){
			add(data);
		}


    };

    add=function(data){
    	$scope.myData.saved.push(data);
    }
	$scope.delete= function(index){
			
			console.log(index);
				$scope.myData.saved.splice(index,1);
			};
    

}]);