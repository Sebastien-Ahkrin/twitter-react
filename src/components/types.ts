export interface Reactions {
  comment: number;
  retweet: number;
  star: number;
}

export interface Post {
  id: string;
  created: Date;
  content: string;
  user: string;
  reactions: Reactions;
}

export interface User {
  name: string;
  username: string;
  description: string;
  background: string;
  profile: string;
}
