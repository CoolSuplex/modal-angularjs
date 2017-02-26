
var featureToggleApp = angular.module('featureToggleApp');

featureToggleApp.controller('FeatureToggleController', ['$scope', '$http', '$modal', '$window', 'featureToggleFactory', function($scope, $http, $modal, $window, featureToggleFactory){


$scope.logout = function() {
	$http.post('logout', {}).finally(function() {
		$state.go("login");
	});
};


/*this function (angular's $http) provides us the full list of features from the backend
 * and this list will be used on dashboard (index.html) to display features.
 * */
$scope.getFeatureList = function() {
	var url = '';
	var getFeatureService = $http.get(url);
	getFeatureService.then(function successCallBack(response) {
		console.log('Features retrieved successfully');
		$scope.features = response.data;
		return $scope.features;
	},
	function errorCallback(response){
		console.log('Error in getting feature list !!');
		return [];
		});
}();


/*Gets called from the click on Edit feature icon Link on Dashboard*/
$scope.editModal = function(/*feature*/) {
	
	var modalInstance = $modal.open({
		templateUrl: '../html/editFeatureModal.html',
		controller: 'EditFeatureCtrl',
/*		
 * resolve (Type: Object) - Members that will be resolved and passed to the controller as locals; 
 * it is equivalent of the resolve property in the router.
 */
 
/* resolve: {
			featureOrig: function(feature) {
				return feature;
			},
			userInsertText: function() {
				return $scope.userInsertText;
			}
		}*/
	});
	

/* Modal service(-Angular-ui-bootstrap) promise Parent controller receiving from the updated data from Child controller 
 * so that the updated values can be displayed on the parent html (page which contains the modal click)
 */
	modalInstance.result.then(function (result) {
		$window.scrollTo(0, 0);
	    $scope.userInsertText = result.userInsertText;
	    feature.group = result.feature.group; /*fetching individual item*/
	    feature.enable = result.feature.enable;
	    feature.description = result.feature.description;
	    feature.permissions = result.feature.permissions; 
	    
	  }, function () {
	    $log.info('Modal dismissed at: ' + new Date());
	  });
	

};


}]);
