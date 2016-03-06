module services {

	declare var Firebase: any;
	declare var $q:any;

	export class AuthService {

		public static $inject = ['$http', '$q', '$firebaseAuth'];

		http: any;
		firebaseAuth: any;
		q:any;

		constructor($http, $q, firebaseAuth) {
			
			this.http = $http;
			this.firebaseAuth = firebaseAuth;
			this.q = $q;

			console.log("service initialized");
		}

		initialize () {

			var defer = this.q.defer();

			var ref = new Firebase("https://pavansachi.firebaseio.com/");

			ref.authWithOAuthPopup("google", function(error, authData) {

				if (error) {
					console.log("Login Failed!", error);
				} else {

					defer.resolve(authData.google.displayName);

					console.log("Authenticated successfully with payload:", authData);
				}
			});

			return defer.promise;
		}

	}

}