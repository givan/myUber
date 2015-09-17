angular.module('MapApp.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
})

/**
 * HEADER - handle menu toggle
 */
  .controller('HeaderCtrl', function ($scope) {
    // Main app controller, empty for the example

  })

/**
 * MAIN CONTROLLER - handle inapp browser
 */
  //.controller('MainCtrl', ['$scope', function ($scope) {
  //  // do something
  //}])

/**
 * A google map / GPS controller.
 */
  .controller('GpsCtrl', ['$scope', '$ionicPlatform', '$location',
    function ($scope, $ionicPlatform, $location) {

      // init gps array
      $scope.whoiswhere = [];
      $scope.basel = {lat: 47.55633987116614, lon: 7.576619513223015};


      // check login code
      $ionicPlatform.ready(function () {
        navigator.geolocation.getCurrentPosition(function (position) {
          $scope.position = position;
          var c = position.coords;
          $scope.gotoLocation(c.latitude, c.longitude);
          $scope.$apply();
        }, function (e) {
          console.log("Error retrieving position " + e.code + " " + e.message)
        });
        $scope.gotoLocation = function (lat, lon) {
          if ($scope.lat != lat || $scope.lon != lon) {
            $scope.basel = {lat: lat, lon: lon};
            $scope.$apply("basel");
          }
        };

        // some points of interest to show on the map
        // to be user as markers, objects should have "lat", "lon", and "name" properties
        $scope.whoiswhere = [
          {"name": "My Marker", "lat": $scope.basel.lat, "lon": $scope.basel.lon},
        ];

      });

    }])

/**
 * MAIN CONTROLLER - handle inapp browser
 */
  .controller('HelpCtrl', ['$scope', function ($scope) {
    // do something
  }]);
