import { User as UserType } from '../types';

interface UserProps {
  user: UserType;
}

export default function User(props: UserProps) {
  const { user } = props;

  return (
    <a href={user.username} className="profile-nav">
      <img className="profile-photo" alt="" src={user.profile} />
      <h4>{user.name}</h4>
      <h6>{user.username} - toto</h6>
    </a>
  );
}
