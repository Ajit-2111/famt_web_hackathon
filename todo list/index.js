var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.tasks = [];
  $scope.disableBtn = false;
  $scope.changetaskstatus = function () {
    if (($scope.task.status.text = "No")) {
      $scope.task.status = "Yes";
    } else {
      $scope.task.status = "No";
    }
  };
  $scope.addtask = function () {
    $scope.tasks.push({
      index: $scope.tasks.length + 1,
      work: $scope.newtask
    });

    console.log($scope.newtask);
    $scope.tasks = $scope.tasks.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.work === value.work)
    );
    console.log($scope.tasks);
    $scope.newtask = "";
  };
});
