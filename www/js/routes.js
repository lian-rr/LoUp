angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('configuration', {
        url: '/configuration',
        templateUrl: 'templates/configuration.html',
        abstract: true
      })

      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('signup', {
        url: '/signuo',
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      })

      .state('configuration.settings', {
        url: '/settings',
        views: {
          'tab2': {
            templateUrl: 'templates/settings.html',
            controller: 'settingsCtrl'
          }
        }
      })

      .state('configuration.account', {
        url: '/account',
        views: {
          'tab1': {
            templateUrl: 'templates/account.html',
            controller: 'accountCtrl'
          }
        }
      })

      .state('configuration.changePassword', {
        url: '/chgpass',
        views: {
          'tab2': {
            templateUrl: 'templates/changePassword.html',
            controller: 'changePasswordCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/home')


  });
