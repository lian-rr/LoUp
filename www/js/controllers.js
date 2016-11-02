angular.module('app.controllers', [])

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

  .controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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

  .controller('accountCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('changePasswordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('MapController', ['$scope', '$ionicLoading',
    function ($scope, $ionicLoading) {

      var icons = {
        current: {
          icon: '../img/current.png'
        },
        restaurant: {
          icon: '../img/restaurant.png'
        },
        bar: {
          icon: '../img/bar.png'
        }
      };

      //var markers = [
      //  {
      //    name:"SIMPE",
      //    position: new google.maps.LatLng(9.9711124, -84.1273333),
      //    type: 'restaurant'
      //  },
      //  {
      //    name:"AM/PM",
      //    position: new google.maps.LatLng(9.9675813, -84.1208379),
      //    type: 'restaurant'
      //  },
      //  {
      //    name:"POPS",
      //    position: new google.maps.LatLng(9.967784, -84.120198),
      //    type: 'restaurant'
      //  },
      //  {
      //    name:"SubWay",
      //    position: new google.maps.LatLng(9.9677543, -84.1202773),
      //    type: 'restaurant'
      //  },
      //  {
      //    name:"Via Parc",
      //    position: new google.maps.LatLng(9.967873, -84.120444),
      //    type: 'restaurant'
      //  },
      //  {
      //    name:"Bar el Jardin",
      //    position: new google.maps.LatLng(9.968334, -84.120769),
      //    type: 'bar'
      //  },
      //  {
      //    name:"Becker & Loren",
      //    position: new google.maps.LatLng(9.970164, -84.135262),
      //    type: 'bar'
      //  },
      //  {
      //    name:"Soda Teresita",
      //    position: new google.maps.LatLng(9.985011, -84.130914),
      //    type: 'restaurant'
      //  },
      //  {
      //    name:"Escuela de Ciencias del deporte",
      //    position: new google.maps.LatLng(9.9698282, -84.1281331),
      //    type: 'restaurant'
      //  }
      //
      //];

      google.maps.event.addDomListener(window, 'load', function () {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          //disableDefaultUI: true,
          styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{"saturation": 36}, {"color": "#fe9f06"}, {"lightness": 40}]
          }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
          }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#eb5e01"}, {"lightness": 20}]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#eb5e01"}, {"lightness": 17}, {"weight": 1.2}]
          }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 20}]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 21}]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#46bcec"}, {"lightness": 17}]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#46bcec"}, {"lightness": 29}, {"weight": 0.2}]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{"color": "#46bcec"}, {"lightness": 18}]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{"color": "#46bcec"}, {"lightness": 16}]
          }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 19}]
          }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 17}]}]
        };


        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        function addMarker(marker) {
          var aux = new google.maps.Marker({
            title: marker.name,
            position: marker.position,
            icon: icons[marker.type].icon,
            map: map
          });
        }

        navigator.geolocation.getCurrentPosition(function (pos) {
          map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            title: "My Location",
            icon: icons['current'].icon
          });
        });

        var markers  = $scope.$meteorCollection(Markers,false);
        //console.log(markers);
        for (var i = 0, marker; marker = markers[i]; i++) {
          marker.position = google.maps.LatLng(marker.lat, marker.lng);
          console.log(marker);
          addMarker(marker);
        }


        $scope.map = map;
      });
    }]);
