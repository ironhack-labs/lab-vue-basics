export default class Post {
  title: string;
  description: string;
  body: string;
  cover: URL;

  constructor(title: string, description: string, body: string, cover: URL) {
    this.title = title;
    this.description = description;
    this.body = body;
    this.cover = cover;
  }
}
