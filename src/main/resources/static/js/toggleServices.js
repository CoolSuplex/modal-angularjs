angular.module('featureToggleApp').factory('featureToggleFactory',['$http', '$q', function($http, $q){
		

	var featureToggleFactory = {};
	
	featureToggleFactory.postEditFeatureRestCall = function (editFeatureData){
		
		var url = '';
    	featureToggleFactory.editFeatureRestService = $http.post(url, editFeatureData);

	}
	
	
	 return featureToggleFactory;
	
}]);

