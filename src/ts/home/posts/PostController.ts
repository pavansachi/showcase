/// <reference path='../../app.ts' />

module controllers {

    declare var Firebase: any;

    export class PostController {

        items:any;
        size:number;

        postItem: models.PostModel;
        currItem: models.PostModel;

        location: any;

        sce: any;

        user:string;

        public static $inject = ["$firebaseArray", "$location", "$sce"];
        
        constructor($firebaseArray, $location, $sce) {

            this.items = [];
            this.size = 0;
            this.postItem = new models.PostModel('');
            this.location = $location;
            this.sce = $sce;
          //  this.firebaseArray = $firebaseArray;

            var firebaseref = new Firebase("https://pavansachi.firebaseio.com/posts");

            this.items = $firebaseArray(firebaseref);
        }
        
        getSafeHtml(html) {
            return this.sce.trustAsHtml(html);
        }

        setItem(item) {

            this.postItem = item;
            this.currItem = angular.copy(item);
        }

        add() {

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
            }

            edit() {

                this.postItem.title = this.currItem.title;
                this.postItem.content = this.currItem.content;

                this.items.$save(this.postItem).then(function(){
                    console.log("save");
                });

                this.location.path("/post/list");

            }

        }

    }