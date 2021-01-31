var app = angular.module("app", []);
 
app.controller("ctrl", ['$scope', '$http', '$interval', function($scope, $http, $interval) {
 
    $scope.sortType = 'name';       // Set the default sort type
    $scope.sortOrder  = false;      // Set the default sort order   
    $scope.state  = false;              // Set the default error message state
 
    $scope.json_data = null;            // Set the default planet_list
    $scope.getData = function() {
        $http({         
            method: "GET",
            url: 'http://localhost:8080/emp'
        }).then(function(response) {
            $scope.json_data = response.data;
            console.log("Success -> " + response.data);
        }, function(response) {
            $scope.state  = true;
            console.log("Failure");
        });
    };
    $scope.createEmployee = function(form) {
        $http({         
            method: "POST",
            url: 'http://localhost:8080/emp',
            data: form
        }).then(function(response) {
            $scope.json_data = response.data;
            console.log("Success -> " + response.data);
        }, function(response) {
            $scope.state  = true;
            console.log("Failure");
        });
    };
}]);