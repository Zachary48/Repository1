import React from 'react';
import './FeedDisplay.css'; // Assuming CSS file for styles

const FeedDisplay = ({ data }) => {
  console.log('Post data:', data); // Log data to verify it's received

  if (!data || typeof data !== 'object') {
    return (
      <div className="feed-display-error">
        <p>No valid data available</p>
      </div>
    );
  }

  const { title = 'Untitled', body = 'No description provided.', compensation = 'Not specified' } = data;

  return (
    <div className="feed-display-card" role="article" aria-labelledby={`feed-title-${title}`}>
      <h3 id={`feed-title-${title}`} className="feed-display-title">{title}</h3>
      <p className="feed-display-body">
        {body.length > 300 ? `${body.slice(0, 300)}...` : body}
      </p>
      <p className="feed-display-compensation">
        <strong>Compensation:</strong> {compensation}
      </p>
    </div>
  );
};

export default FeedDisplay;
