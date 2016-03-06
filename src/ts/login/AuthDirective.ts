/// <reference path='../app.ts' />

module directives {

	export function authDirective(): ng.IDirective {

		console.log("inside directive");

		var model = new models.AuthDirectiveModel();

		model.setReplace(false);
		model.setRestrict('E');
		model.scope = {

			user: '@'

		};
	//	model.setController(auth.controller.AuthController);

		// model.controller = function($scope) {
		// 	$scope.user = "Pavan";
		// }

	//	model.setControllerAlias('auth');

		model.link = function(scope,e,a) {
			console.log("directive linked" + scope.user);

		}

		return model;
	}

}