var myApp = angular.module('myModule',[])

myApp.controller("myController",function($scope){
    // $scope.message = message
    $scope.inputText = '';
    $scope.output = function() {
        return $scope.inputText.split("").reverse().join("");
    }
    
    $scope.length = function() {
        return $scope.inputText.length;
    }
})

myApp.filter('titleCase', function () {
    return function (input) {
        input = input || '';
        return input.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
})

$scope.reverseName = function(){
    $scope.name = $scope.name.split('').reverse().join('');
  };
