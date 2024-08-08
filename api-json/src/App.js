import React, { useState, useEffect } from 'react'; 
import PostList from './components/PostList'; 
import PostDetail from './components/PostDetail'; 
import axios from 'axios';

const App = () => {
  
  const [posts, setPosts] = useState([]);
	  
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
       
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); 

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };
  return (
    <div>
     
      <PostList posts={posts} onSelectPost={handleSelectPost} />
      <PostDetail post={selectedPost} />
    </div>
  );
};
export default App;
