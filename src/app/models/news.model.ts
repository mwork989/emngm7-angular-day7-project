export interface INewsResponse {
  articles: INewsArticles[];
  status: string;
  totalResults: number;
}

export interface INewsArticles {
  source: INewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface INewsSource {
  id: string;
  name: string;
}
