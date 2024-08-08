import React from 'react';

const PostList = ({ posts, onSelectPost }) => {
  return (
    <div>
      <h2>Posts</h2> 
      <ul>
      
        {posts.map((post) => (
          <li key={post.id} onClick={() => onSelectPost(post)}>
            {post.title} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;