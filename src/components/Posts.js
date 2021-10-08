import React from 'react';
import '../index.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='posts-list-group'>
      {posts.map((post) => (
        <li key={post.id} className='posts-list-item'>
          <p className='post'>
            {' '}
            [{post.id}] {post.title}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
