import React, { useEffect, useState } from 'react';
import FeedDisplay from './FeedDisplay';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://research-finder-server.vercel.app/posts'); 
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="Feed">
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post, index) => <FeedDisplay key={index} data={post} />)
      )}
    </div>
  );
}

export default Feed;
