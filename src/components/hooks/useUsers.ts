import { useCallback, useState } from 'react';

import users from '../../data/users.json';
import { User } from '../types';

export function useUsers() {
  const [state] = useState<Array<User>>(users as unknown as Array<User>);

  const findUser = useCallback(
    (id: string) => {
      const user = state.find((state) => state.username === id);

      if (!user) {
        throw new Error('user not found');
      }

      return user;
    },
    [state],
  );

  return {
    users: state,
    findUser,
  };
}
