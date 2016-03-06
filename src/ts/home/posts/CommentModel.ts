module models {
	
	export class CommentModel {

		description: string;
		author: string;

		constructor() {
			this.description = '';
			this.author = '';
		}

		setDescription(description) {
			this.description = description;
        }

        getDescription() {
			return this.description;
        }

        setAuthor(author) {
			this.author = author;
        }

        getDAuthor() {
			return this.author;
        }

	}
}