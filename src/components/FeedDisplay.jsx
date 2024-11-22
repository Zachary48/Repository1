import React from 'react';
import './FeedDisplay.css'; // Assuming CSS file for styles

const FeedDisplay = ({ data }) => {
  const { title, body, compensation, organization, researcherName, workType } = data;

  return (
    <div className="feed-display-card">
      <h3>{title || 'Untitled'}</h3>
      <p>{body || 'No description available.'}</p>
      <p><strong>Compensation:</strong> {compensation || 'Not specified'}</p>
      <p><strong>Organization:</strong> {organization || 'Unknown'}</p>
      <p><strong>Researcher:</strong> {researcherName || 'Unknown'}</p>
      <p><strong>Work Type:</strong> {workType || 'Not specified'}</p>
    </div>
  );
};

export default FeedDisplay;
