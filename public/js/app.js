var controllers;
(function (controllers) {
    var AuthController = (function () {
        function AuthController(AuthService) {
            var _this = this;
            this._authSvc = AuthService;
            this.user = "Anonymous";
            this.logged = false;
            if (!this.logged) {
                AuthService.initialize().then(function (data) {
                    _this.user = data;
                    _this.logged = true;
                });
            }
        }
        AuthController.$inject = ['AuthService'];
        return AuthController;
    })();
    controllers.AuthController = AuthController;
})(controllers || (controllers = {}));
/// <reference path='../../app.ts' />
var controllers;
(function (controllers) {
    var PostController = (function () {
        function PostController($firebaseArray, $location, $sce) {
            this.items = [];
            this.size = 0;
            this.postItem = new models.PostModel('');
            this.location = $location;
            this.sce = $sce;
            //  this.firebaseArray = $firebaseArray;
            var firebaseref = new Firebase("https://pavansachi.firebaseio.com/posts");
            this.items = $firebaseArray(firebaseref);
        }
        PostController.prototype.getSafeHtml = function (html) {
            return this.sce.trustAsHtml(html);
        };
        PostController.prototype.setItem = function (item) {
            this.postItem = item;
            this.currItem = angular.copy(item);
        };
        PostController.prototype.add = function () {
            this.user;
            this.postItem.setAuthor("Pavan Sachi");
            this.items.$add(this.postItem);
            this.postItem.title = '';
            this.postItem.content = '';
            this.location.path("/post/list");
            //this.firebaseArray.$add(post);
            //   this.firebaseref.push(post);
            //   this.items.push(post);
            //   this.size++;
        };
        PostController.prototype.edit = function () {
            this.postItem.title = this.currItem.title;
            this.postItem.content = this.currItem.content;
            this.items.$save(this.postItem).then(function () {
                console.log("save");
            });
            this.location.path("/post/list");
        };
        PostController.$inject = ["$firebaseArray", "$location", "$sce"];
        return PostController;
    })();
    controllers.PostController = PostController;
})(controllers || (controllers = {}));
/// <reference path='../app.ts' />
var directives;
(function (directives) {
    function authDirective() {
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
        model.link = function (scope, e, a) {
            console.log("directive linked" + scope.user);
        };
        return model;
    }
    directives.authDirective = authDirective;
})(directives || (directives = {}));
var services;
(function (services) {
    var AuthService = (function () {
        function AuthService($http, $q, firebaseAuth) {
            this.http = $http;
            this.firebaseAuth = firebaseAuth;
            this.q = $q;
            console.log("service initialized");
        }
        AuthService.prototype.initialize = function () {
            var defer = this.q.defer();
            var ref = new Firebase("https://pavansachi.firebaseio.com/");
            ref.authWithOAuthPopup("google", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                }
                else {
                    defer.resolve(authData.google.displayName);
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
            return defer.promise;
        };
        AuthService.$inject = ['$http', '$q', '$firebaseAuth'];
        return AuthService;
    })();
    services.AuthService = AuthService;
})(services || (services = {}));
var models;
(function (models) {
    var AuthDirectiveModel = (function () {
        function AuthDirectiveModel() {
        }
        AuthDirectiveModel.prototype.setRestrict = function (restrict) {
            this.restrict = restrict;
        };
        AuthDirectiveModel.prototype.setScope = function (scope) {
            this.scope = scope;
        };
        AuthDirectiveModel.prototype.setController = function (controller) {
            this.controller = controller;
        };
        AuthDirectiveModel.prototype.setControllerAlias = function (controllerAs) {
            this.controllerAlias = controllerAs;
        };
        AuthDirectiveModel.prototype.setTemplate = function (template) {
            this.template = template;
        };
        AuthDirectiveModel.prototype.setTemplateUrl = function (templateUrl) {
            this.templateUrl = templateUrl;
        };
        AuthDirectiveModel.prototype.setReplace = function (replace) {
            this.replace = replace;
        };
        return AuthDirectiveModel;
    })();
    models.AuthDirectiveModel = AuthDirectiveModel;
})(models || (models = {}));
var models;
(function (models) {
    var CommentModel = (function () {
        function CommentModel() {
            this.description = '';
            this.author = '';
        }
        CommentModel.prototype.setDescription = function (description) {
            this.description = description;
        };
        CommentModel.prototype.getDescription = function () {
            return this.description;
        };
        CommentModel.prototype.setAuthor = function (author) {
            this.author = author;
        };
        CommentModel.prototype.getDAuthor = function () {
            return this.author;
        };
        return CommentModel;
    })();
    models.CommentModel = CommentModel;
})(models || (models = {}));
var models;
(function (models) {
    var PostModel = (function () {
        function PostModel(title) {
            this.title = title;
            this.content = '';
            this.author = '';
            this.comments = new Array();
        }
        PostModel.prototype.setTitle = function (title) {
            this.title = title;
        };
        PostModel.prototype.getTitle = function () {
            return this.title;
        };
        PostModel.prototype.setContent = function (content) {
            this.content = content;
        };
        PostModel.prototype.getContent = function () {
            return this.content;
        };
        PostModel.prototype.setAuthor = function (author) {
            this.author = author;
        };
        PostModel.prototype.getAuthor = function () {
            return this.author;
        };
        PostModel.prototype.setCommentList = function (comments) {
            this.comments = comments;
        };
        return PostModel;
    })();
    models.PostModel = PostModel;
})(models || (models = {}));
var utils;
(function (utils) {
    var Register = (function () {
        function Register() {
        }
        Register.prototype.registerModule = function (name, moduleList) {
            this.ngModule = angular.module(name, moduleList);
            return this.ngModule;
        };
        /*
            
        add a module to register controllers
        
        */
        Register.prototype.registerControllers = function (module) {
            this.ngModule.controller(module);
        };
        /*
            
        add a module to register services
        
        */
        Register.prototype.registerServices = function (module) {
            this.ngModule.service(module);
        };
        /*
                
            add a module to register services
            
            */
        Register.prototype.registerDirectives = function (module) {
            this.ngModule.directive(module);
        };
        return Register;
    })();
    utils.Register = Register;
})(utils || (utils = {}));
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
var app;
(function (app_1) {
    var registerUtil = new utils.Register();
    var controllerModules = registerUtil.registerModule('controllers', []);
    var servicesModules = registerUtil.registerModule('services', []);
    //var authModule:ng.IModule = register.addModule('controllers', ['firebase']);
    //var postModule:ng.IModule = register.addModule('posts', ['auth']);
    var app = registerUtil.registerModule('app', ['ui.router', 'controllers', 'services', 'firebase']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/post/list");
        $stateProvider.state('list', {
            url: '/post/list',
            templateUrl: 'public/partials/posts/list.html'
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
})(app || (app = {}));
/*
module post {
    
    export interface IPostScope extends ng.IScope {
        
        items:Array<PostModel>;
        size:number;
        vm:PostController;
    }
    
}*/ 
