import { FormEvent, useState } from 'react';

import { usePost } from '../hooks/usePost';

import Article from './Article';

export default function Thread() {
  const { posts } = usePost();

  return (
    <div>
      <Form />

      {posts.map((post) => (
        <Article key={post.id} article={post} />
      ))}
    </div>
  );
}

function Form() {
  const [content, setContent] = useState('');
  const { addPost } = usePost();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addPost({
      id: 'toto',
      created: new Date(),
      content,
      reactions: {
        comment: 0,
        retweet: 0,
        star: 0,
      },
      user: '',
    });
  }

  return (
    <form className="tweet-form" onSubmit={onSubmit}>
      <div className="tweet-form-container">
        <a href="iug_nm" className="profile-nav">
          <img
            alt="profile"
            src="https://pbs.twimg.com/profile_images/1448753262535004168/dRJQaiqb.jpg"
            className="profile-photo"
          />
        </a>
        <textarea
          value={content}
          onChange={(element) => setContent(element.target.value)}
          placeholder="What's happening ?"
        />
      </div>

      <button type="submit" className="tweet-form-submit">
        Tweet
      </button>
    </form>
  );
}
