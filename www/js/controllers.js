angular.module('app.controllers', ['UserService'])

  .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('accountCtrl', ['$scope', '$stateParams', 'userService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, userService) {
      $scope.user = userService.active;

      console.log($scope.user);
    }])

  .controller('changePasswordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }]);

//.controller('MapController', ['$scope', '$ionicLoading','$q',
//  function ($scope, $ionicLoading, $q) {
//
//    $scope.show = function() {
//      $ionicLoading.show({
//        template: 'Loading...',
//        duration: 3000
//      }).then(function(){
//        console.log("The loading indicator is now displayed");
//      });
//    };
//    $scope.hide = function(){
//      $ionicLoading.hide().then(function(){
//        console.log("The loading indicator is now hidden");
//      });
//    };
//
//    var icons = {
//      current: {
//        icon: '../img/current.png'
//      },
//      restaurant: {
//        icon: '../img/restaurant.png'
//      },
//      bar: {
//        icon: '../img/bar.png'
//      }
//    };
//
//    google.maps.event.addDomListener(window, 'load', function () {
//      var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
//      var mapOptions = {
//        center: myLatlng,
//        zoom: 16,
//        mapTypeId: google.maps.MapTypeId.ROADMAP,
//        //disableDefaultUI: true,
//        styles: [{
//          "featureType": "all",
//          "elementType": "labels.text.fill",
//          "stylers": [{"saturation": 36}, {"color": "#fe9f06"}, {"lightness": 40}]
//        }, {
//          "featureType": "all",
//          "elementType": "labels.text.stroke",
//          "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
//        }, {
//          "featureType": "all",
//          "elementType": "labels.icon",
//          "stylers": [{"visibility": "off"}]
//        }, {
//          "featureType": "administrative",
//          "elementType": "geometry.fill",
//          "stylers": [{"color": "#eb5e01"}, {"lightness": 20}]
//        }, {
//          "featureType": "administrative",
//          "elementType": "geometry.stroke",
//          "stylers": [{"color": "#eb5e01"}, {"lightness": 17}, {"weight": 1.2}]
//        }, {
//          "featureType": "landscape",
//          "elementType": "geometry",
//          "stylers": [{"color": "#000000"}, {"lightness": 20}]
//        }, {
//          "featureType": "poi",
//          "elementType": "geometry",
//          "stylers": [{"color": "#000000"}, {"lightness": 21}]
//        }, {
//          "featureType": "road.highway",
//          "elementType": "geometry.fill",
//          "stylers": [{"color": "#46bcec"}, {"lightness": 17}]
//        }, {
//          "featureType": "road.highway",
//          "elementType": "geometry.stroke",
//          "stylers": [{"color": "#46bcec"}, {"lightness": 29}, {"weight": 0.2}]
//        }, {
//          "featureType": "road.arterial",
//          "elementType": "geometry",
//          "stylers": [{"color": "#46bcec"}, {"lightness": 18}]
//        }, {
//          "featureType": "road.local",
//          "elementType": "geometry",
//          "stylers": [{"color": "#46bcec"}, {"lightness": 16}]
//        }, {
//          "featureType": "transit",
//          "elementType": "geometry",
//          "stylers": [{"color": "#000000"}, {"lightness": 19}]
//        }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 17}]}]
//      };
//
//
//      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
//      function addMarker(location) {
//        var aux = new google.maps.Marker({
//          title: location.name,
//          position: google.maps.LatLng(location.lat, location.lng),
//          icon: icons[location.type].icon,
//          map: map
//        });
//        console.log(aux);
//      }
//
//      navigator.geolocation.getCurrentPosition(function (pos) {
//        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//        var myLocation = new google.maps.Marker({
//          position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
//          map: map,
//          title: "My Location",
//          icon: icons['current'].icon
//        });
//      });
//
//      var locations  = $scope.$meteorCollection(Locations,false);
//      //console.log(locations);
//
//      locations.forEach(function (location){
//        //console.log(location);
//        addMarker(location);
//      });
//
//      //for (var i = 0, location; location = locations[i]; i++) {
//      //  //location.position = google.maps.LatLng(location.lat, location.lng);
//      //  //console.log(location);
//      //  //addMarker(location);
//      //}
//
//
//      $scope.map = map;
//    });
//  }]);
