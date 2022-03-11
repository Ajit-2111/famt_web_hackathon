var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.friends = [];
  $scope.addfriend = function () {
    $scope.friends.push({
      fname : $scope.newfname,
      lname : $scope.newlname
    });
    $scope.friends = $scope.friends.filter(
      (value, index, self) =>
        index === self.findIndex((t) =>  t.fname === value.fname && t.lname === value.lname)
    );
    for (i in  $scope.friends) {
      console.log(i.fname , i.lname)
    }
    console.log($scope.friends);
    $scope.newfname="";
     $scope.newlname= ""
  };
});
