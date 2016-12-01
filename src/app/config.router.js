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
						templateUrl: 'tpl/app.html'
					})
					.state('app.dashboard-v1', {
						url: '/dashboard-v1',
						templateUrl: 'tpl/app_dashboard_v1.html',
						resolve: {
							deps: ['$ocLazyLoad',
								function($ocLazyLoad) {
									return $ocLazyLoad.load(['js/controllers/chart.js']);
								}
							]
						}
					})
					// others
					.state('lockme', {
						url: '/lockme',
						templateUrl: 'tpl/page_lockme.html'
					})
					.state('access', {
						url: '/access',
						template: '<div ui-view class="fade-in-right-big smooth"></div>'
					})
					.state('access.signin', {
						url: '/signin',
						templateUrl: 'tpl/page_signin.html',
						resolve: {
							deps: ['uiLoad',
								function(uiLoad) {
									return uiLoad.load(['js/controllers/signin.js']);
								}
							]
						}
					})
					.state('access.signup', {
						url: '/signup',
						templateUrl: 'tpl/page_signup.html',
						resolve: {
							deps: ['uiLoad',
								function(uiLoad) {
									return uiLoad.load(['js/controllers/signup.js']);
								}
							]
						}
					})
					.state('access.forgotpwd', {
						url: '/forgotpwd',
						templateUrl: 'tpl/page_forgotpwd.html'
					})
					.state('access.404', {
						url: '/404',
						templateUrl: 'tpl/page_404.html'
					})
			}
		]
	);