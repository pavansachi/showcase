/// <reference path='../../typings/browser/ambient/jquery/jquery.d.ts' />
/// <reference path='../../typings/browser/ambient/angular/angular.d.ts' />

/// <reference path='login/AuthController.ts' />
/// <reference path='home/posts/PostController.ts' />

/// <reference path='login/AuthDirective.ts' />

/// <reference path='login/AuthService.ts' />

/// <reference path='login/AuthDirectiveModel.ts' />
/// <reference path='home/posts/CommentModel.ts' />
/// <reference path='home/posts/PostModel.ts' />

/// <reference path='utils/apputil.ts' />

module app {

	var registerUtil: utils.Register = new utils.Register();

	var controllerModules:ng.IModule = registerUtil.registerModule('controllers', []);
	var servicesModules: ng.IModule = registerUtil.registerModule('services', []);

	//var authModule:ng.IModule = register.addModule('controllers', ['firebase']);
	//var postModule:ng.IModule = register.addModule('posts', ['auth']);
	var app: ng.IModule = registerUtil.registerModule('app', ['ui.router', 'controllers', 'services', 'firebase']);

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/post/list");

		$stateProvider.state('list', {
			url: '/post/list',
			templateUrl:'public/partials/posts/list.html'
		});

		$stateProvider.state('create', {
			url: '/post/create',
			templateUrl: 'public/partials/posts/create.html'
		});

		$stateProvider.state('edit', {
			url: '/post/edit',
			templateUrl: 'public/partials/posts/edit.html'
		});

	});

	registerUtil.registerServices(services);

	// register all controllers by providing the module name
	registerUtil.registerControllers(controllers);

	registerUtil.registerDirectives(directives);

	//register a single controller
//	register.addController('AuthController', auth.AuthController);
	//register.addDirective('authDirective', auth.AuthDirective);

	//register.addController('PostController', post.PostController);

	//var register: utils.Register = new utils.Register();

//	register.addModule('auth.controller', []);
	
	//register.addModule('auth.controller', []);
	//register.addModule('app', ['firebase']);

	//register.addControllerModule(auth.controller);

	//angular.module("auth.controller", []);

	//angular.module("app", ['firebase']).controller("AuthController", auth.controller.AuthController);

}

