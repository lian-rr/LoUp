angular
  .module('userModule', ['UserService'])
  .controller('loginCtrl', ['$scope', '$stateParams', 'userService', '$location',
    function ($scope, $stateParams, userService, $location) {

      $scope.user = null;

      $scope.login = function (user) {
        console.log(userService);
        console.log($scope);
        userService.users.forEach(function (u) {
          if (u.email === user.mail) {
            userService.active = u;
            $location.path("/home");
          }
        });
        if (userService.active === null) {
          alert("User don't exist");
          $location.path("/login");
        }

      }


    }]);
