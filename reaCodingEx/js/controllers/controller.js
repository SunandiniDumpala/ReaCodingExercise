/*  Controller
	@dataCtrl
	Description of the controller
*/

angular.module("Rea").controller("dataCtrl",['$scope', '$http',function($scope,$http){
	/*get data from the JSON file*/
	$http.get('data.json').then(function(response) {
        $scope.myData = response.data;
        },	function myError(response) {
        		$scope.myData = response.statusText;
        });

		/*To add a property to saved properties list
		 @x - to assign a boolean value for further use in the function.
		 @len- to get the saved array from JSON
		*/
		$scope.addProp = (data) => {
			let len=$scope.myData.saved;
			let k=0;
			let x;
			while(k<len.length){
				//Code to avoid duplicates, checking if the property to be added is already present in the saved properies list
				if(len[k].id==data.id){
					//if it is a duplicate, alert the user and do not add the property again.
					x=true;
					alert("Property already added. Cannot add a duplicate");
				}
				else{
					x=false;
				}
				k++;
			};
		/*If the property to be added is not 
			present in the saved properties list, add it.
		*/
			if(x==false){
				add(data);
			}
		/*when the saved properties list is empty
			after all deletions, add a property from results array to saved properties.
		*/
			if(len.length==0){
				add(data);//This function is used to push properties from one list to another
			}
    	};

    	add = (data) => {
    		$scope.myData.saved.push(data);
    	}
		/*On clicking the delete button, the property 
			is deleted from saved properties list.
		*/
		$scope.delete = (index) => {
			$scope.myData.saved.splice(index,1);
		};    

}]);