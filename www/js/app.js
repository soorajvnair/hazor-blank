// Main Module.
// Author : hazorconsulting
// email : developer@hazorconsulting.com
// website : https://hazorconsulting.com
// githuburl : https://github.com/hazorconsulting

(function () { 
  
  // root app variable
  var app = angular.module('hazorBlank', ['ionic'])

    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

})();