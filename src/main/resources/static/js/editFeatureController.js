var featureToggleApp = angular.module('featureToggleApp');

featureToggleApp.controller('EditFeatureCtrl', ['$scope', '$modalInstance', 'featureToggleFactory', function($scope, $modalInstance, featureToggleFactory){
	
	/*featureToggleApp.controller('EditFeatureCtrl', ['$scope', 'featureOrig', 'userInsertText', '$modalInstance', 'featureToggleFactory', function($scope, featureOrig, userInsertText, $modalInstance, featureToggleFactory){*/

// Need to do this as we should update the original feature object only when DB update is successful
/* $scope.feature = JSON.parse(JSON.stringify(featureOrig));
 * and insert in dependency as above
 * 
 */

  $scope.close = function(featureObject) {
	/*In this NEW controller, inject $modalInstance it works great and i can wireup the close button */
    $modalInstance.close(
    		{
    			feature: featureObject,
    			userInsertText: $scope.userInsertText
    		},500)
  };
  
  /*This function is called from Modal html on it's form submission to update the new form values in backend*/
  $scope.submitEditFeatureForm = function(editFeatureObj) {
	  
		featureToggleFactory.postEditFeatureRestCall(editFeatureObj);
		$scope.response = featureToggleFactory.editFeatureRestService;
		
		$scope.response.then(function successCallBack(response) {
			console.log('Edit Feature Successfull HURRAY :D');
			// pass updated feature to parent controller, returned from backend 
			$scope.close($scope.feature);
			return response;
		},
		function errorCallback(response){
	        console.log('An error occured, try again');
			// update failed, pass original feature object back to parent controller
			$scope.close(featureOrig);
			});


	};
	

}]);