module models {
    
    export class PostModel {
        
        title:string;
        content:string;
        author: string;
        comments: Array<CommentModel>;
        
        constructor(title:string) {
            this.title = title;
            this.content = '';
            this.author = '';
            this.comments = new Array();
        }

        setTitle(title) {
			this.title = title;
        }

        getTitle() {
			return this.title;
        }
        
        setContent(content) {
			this.content = content;
        }

        getContent() {
			return this.content;
        }

        setAuthor(author) {
			this.author = author;
        }

        getAuthor() {
			return this.author;
        }

        setCommentList(comments) {
			this.comments = comments;
        }

    }
    
}