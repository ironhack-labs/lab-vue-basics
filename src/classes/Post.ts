export default class Post {
  title: string;
  description: string;
  coverDescription: string;
  body: string;
  cover: URL;

  constructor(
    title: string,
    description: string,
    coverDescription: string,
    body: string,
    cover: URL
  ) {
    this.title = title;
    this.description = description;
    this.coverDescription = coverDescription;
    this.body = body;
    this.cover = cover;
  }
}
