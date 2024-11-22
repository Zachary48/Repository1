import React, { useEffect, useState } from 'react';
import FeedDisplay from './FeedDisplay';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await fetch('https://research-finder-server.vercel.app/posts');
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed-container">
      {loading && <p>Loading posts...</p>}
      {error && <p className="feed-error">Error: {error}</p>}
      {!loading && !error && posts.length === 0 && <p>No posts available at the moment.</p>}
      {!loading && !error && posts.length > 0 && (
        <div className="feed-list">
          {posts.map((post, index) => (
            <FeedDisplay key={index} data={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;
