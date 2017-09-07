angular.module("Rea").controller("dataController",['$scope', '$http',function($scope,$http){
	$http.get('data.json').then(function(response) {
        $scope.myData = response.data;
        },	function myError(response) {
        		$scope.myData = response.statusText;
        });

		$scope.addProp = (data) => {
			var len=$scope.myData.saved;
			var k=0;
			var x;
			while(k<len.length){
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
			if(len.length==0){
				add(data);
			}
    	};

    	add = (data) => {
    		$scope.myData.saved.push(data);
    	}

		$scope.delete = (index) => {
			$scope.myData.saved.splice(index,1);
		};    

}]);