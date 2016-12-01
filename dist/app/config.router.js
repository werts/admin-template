'use strict';

/**
 * Config for the router
 */
angular.module('app')
	.run(
		['$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}
		]
	)
	.config(
		['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$urlRouterProvider
					.otherwise('/app/dashboard-v1');

				$stateProvider
					.state('app', {
						abstract: true,
						url: '/app',
						templateUrl: 'dist/sys/tpl/app.html'
					})
					.state('app.dashboard-v1', {
						url: '/dashboard-v1',
						templateUrl: 'dist/sys/tpl/app_dashboard_v1.html',
						resolve: {
							deps: ['$ocLazyLoad',
								function($ocLazyLoad) {
									return $ocLazyLoad.load(['']);
								}
							]
						}
					})
					// others
					.state('lockme', {
						url: '/lockme',
						templateUrl: 'dist/sys/tpl/page_lockme.html'
					})
					.state('access', {
						url: '/access',
						template: '<div ui-view class="fade-in-right-big smooth"></div>'
					})
					.state('access.signin', {
						url: '/signin',
						templateUrl: 'dist/sys/tpl/page_signin.html',
						resolve: {
							deps: ['uiLoad',
								function(uiLoad) {
									return uiLoad.load(['dist/sys/controllers/signin.js']);
								}
							]
						}
					})
					.state('access.signup', {
						url: '/signup',
						templateUrl: 'dist/sys/tpl/page_signup.html',
						resolve: {
							deps: ['uiLoad',
								function(uiLoad) {
									return uiLoad.load(['dist/sys//controllers/signup.js']);
								}
							]
						}
					})
					.state('access.forgotpwd', {
						url: '/forgotpwd',
						templateUrl: 'dist/sys/tpl/page_forgotpwd.html'
					})
					.state('access.404', {
						url: '/404',
						templateUrl: 'dist/sys/tpl/page_404.html'
					})
			}
		]
	);