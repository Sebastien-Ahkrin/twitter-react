import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineRetweet,
} from 'react-icons/ai';

export default function Controls() {
  return (
    <div className="post-controls">
      <span style={{ color: 'gray' }}>
        0 <AiOutlineComment />
      </span>
      <span style={{ color: 'gray' }}>
        0 <AiOutlineRetweet />
      </span>
      <span style={{ color: 'gray' }}>
        0 <AiFillHeart />
      </span>
    </div>
  );
}
