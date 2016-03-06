/// <reference path='../app.ts' />

module utils {

	export class ModuleUtil {

		ngModule: ng.IModule;

		constructor() {

		}

		registerModule(name: string, moduleList: Array<string>) {
			this.ngModule = angular.module(name, moduleList);
			return this.ngModule;
		}

		/*
			
		add a module to register controllers
		
		*/

		registerControllers(module: any) {
			this.ngModule.controller(module);
		}

		/*
			
		add a module to register services
		
		*/

		registerServices(module: any) {
			this.ngModule.service(module);
		}

		/*
				
			add a module to register services
			
			*/

		registerDirectives(module: any) {
			this.ngModule.directive(module);
		}

		/*
			
		add a controller

		addController(name: string, controller: Function) {
			this.module.controller(name, controller);
		}

		*/

		/*
		addDirective(name:string, directive: Function) {
			this.ngModule.directive(name, directive);
		}
		*/
	}

}