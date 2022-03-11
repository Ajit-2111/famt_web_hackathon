var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
  $http({
    method: "GET",
    url:
      "https://raw.githubusercontent.com/amarfamt/TE_IT_WebX_FH22/main/students.json"
  }).then(
    function mySuccess(response) {
      $scope.studentsdata = response.data;
    },
    function myError(response) {
      $scope.studentsdata = response.statusText;
    }
  );
  $scope.IsVisible = false;
  $scope.ShowHide = function () {
    $scope.IsVisible = $scope.IsVisible ? false : true;
  };
  $scope.customOrder = function (x) {
    if ($scope.customOrderBy == x) {
      $scope.customOrderBy = -x;
    } else {
      $scope.customOrderBy = x;
    }
  };
});
