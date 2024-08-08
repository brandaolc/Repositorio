import React from 'react'; 
const PostDetail = ({ post }) => {
  
  if (!post) return <div>Select a post to see details</div>;

  return (
    <div>
      <h2>{post.title}</h2> 
      <p>{post.body}</p> 
    </div>
  );
};

export default PostDetail; 