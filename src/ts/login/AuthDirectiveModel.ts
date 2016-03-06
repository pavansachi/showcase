module models {

	export class AuthDirectiveModel {

		restrict: string;
		scope: any;
		controller: Function;
		controllerAlias: string;
		template: string;
		templateUrl: string;
		replace: boolean;
		link: any;

		constructor () {
			
		}

		setRestrict(restrict:string) {
			this.restrict = restrict;
		}

		setScope(scope:any) {
			this.scope = scope;
		}

		setController(controller: Function) {
			this.controller = controller;
		}

		setControllerAlias(controllerAs: string) {
			this.controllerAlias = controllerAs;
		}

		setTemplate(template:string) {
			this.template = template;
		}

		setTemplateUrl(templateUrl: string) {
			this.templateUrl = templateUrl;
		}

		setReplace(replace) {
			this.replace = replace;
		}

	}

}