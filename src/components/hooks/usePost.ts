import { useCallback, useState } from 'react';

import posts from '../../data/posts.json';
import { Post } from '../types';

export function usePost() {
  const [state, setState] = useState<Array<Post>>(
    posts as unknown as Array<Post>,
  );

  const addPost = useCallback((post: Post) => {
    setState((oldState) => {
      return [...oldState, post];
    });
  }, []);

  const removePost = useCallback((post: string) => {
    setState((oldState) => {
      return [...oldState.filter((s) => s.id !== post)];
    });
  }, []);

  return {
    posts: state,
    addPost,
    removePost,
  };
}
