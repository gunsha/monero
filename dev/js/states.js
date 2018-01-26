angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    '@': {
                        templateUrl: 'templates/layout.html'
                    },
                    'contentView@app': {
                        templateUrl: 'templates/index.html',
                        controller: 'indexCtrl as ctrl'
                    }
                },
                data:{
                    // requiresLogin: true,
                    // requiresRole: ['ADMIN'],
                    pageTitle:'Inicio'
                }
            });
        $locationProvider.html5Mode(true);
    }]);