import React from 'react';

const FeedDisplay = ({ data }) => {
  console.log('Post data:', data); // Log data to verify it's received

  const renderData = (data) => {
    if (typeof data === 'object' && data !== null) {
      const { title, body, compensation } = data;

      return (
        <div style={styles.card}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.body}>{body ? body.slice(0, 300) : ''}{body && body.length > 300 && '...'}</p>
          <p style={styles.compensation}><strong>Compensation:</strong> {compensation}</p>
        </div>
      );
    } else {
      return <p>No valid data available</p>;
    }
  };

  return <div style={styles.container}>{renderData(data)}</div>;
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    width: '50%',
    color: 'black',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
  },
  title: {
    margin: '0 0 10px',
    fontSize: '1.5em',
  },
  body: {
    margin: '10px 0',
    fontSize: '1em',
  },
  compensation: {
    margin: '10px 0',
    fontSize: '1em',
  },
};

export default FeedDisplay;
