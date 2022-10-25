import React from 'react';

import { useUsers } from '../hooks/useUsers';
import { Post } from '../types';

import Controls from './Controls';
import User from './User';

interface ArticleProps {
  article: Post;
}

export default function Article(props: ArticleProps) {
  const { article } = props;
  const { findUser } = useUsers();

  const user = findUser(article.user);

  return (
    <article className="post">
      <User user={user} />
      <div className="post-content">{article.content}</div>
      <Controls />
    </article>
  );
}
