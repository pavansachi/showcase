module controllers {
	
	export class AuthController {

		_this:any;
		user: any;
		_authSvc: services.AuthService;
		logged: boolean;

		public static $inject = ['AuthService'];

		constructor(AuthService) {

			var _this = this;
			this._authSvc = AuthService;

			this.user = "Anonymous";
			this.logged = false;

			if (!this.logged) {
				AuthService.initialize().then(function(data) {
					_this.user = data;
					_this.logged = true;
				});
			}
		}

	}
}