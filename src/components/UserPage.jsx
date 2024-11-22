import React, { useState, useEffect } from 'react';
import './UserPage.css';

const UserPage = () => {
  const [messages, setMessages] = useState([]); // State for inbox messages
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Simulate fetching messages from a backend
    const fetchMessages = async () => {
      setLoading(true);
      setError(null);

      try {
        // Replace with your API endpoint
        const response = await fetch('http://localhost:3000/inbox');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError('Failed to load inbox. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="user-page">
      <h1>Welcome, [User Name]</h1>
      <section className="user-info">
        <h2>Your Information</h2>
        <p>Email: user@example.com</p>
        <p>Member since: January 2024</p>
      </section>
      <section className="user-inbox">
        <h2>Inbox</h2>
        {loading && <p>Loading messages...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && messages.length === 0 && (
          <p>Your inbox is empty.</p>
        )}
        {!loading && !error && messages.length > 0 && (
          <ul>
            {messages.map((message) => (
              <li key={message.id} className="inbox-message">
                <strong>{message.sender}</strong>: {message.text}
                <p className="timestamp">{message.timestamp}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default UserPage;
