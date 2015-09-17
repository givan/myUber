angular.module('MapApp', ['ionic', 'MapApp.controllers', 'MapApp.directives', 'MapApp.filters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

//  // example taken from: http://codepen.io/yafraorg/pen/jBEky
//.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//  $stateProvider
//    .state('menu', {url: "/map", abstract: true, templateUrl: "menu.html"})
//    .state('menu.home', {url: '/home', views: {'menuContent': {templateUrl: 'gpsView.html', controller: 'GpsCtrl'} }  })
//    .state('menu.help', {url: '/help', views: {'menuContent': {templateUrl: 'helpView.html', controller: 'HelpCtrl'} }  });
//
//  // if none of the above states are matched, use this as the fallback
//  $urlRouterProvider.otherwise('/map/home');
//}]);
