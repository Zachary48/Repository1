// src/components/Researchers.jsx
import axios from 'axios';
import { useEffect, useState } from 'react';

const Researchers = () => {
  const [researchers, setResearchers] = useState([]);

  useEffect(() => {
    // Fetching data from the backend
    axios.get('http://localhost:3000/researcher') // Adjust the URL to match your route
      .then(response => setResearchers(response.data))
      .catch(error => console.error("Error fetching researchers:", error));
  }, []);

  return (
    <div>
      <h2>Researchers</h2>
      <ul>
        {researchers.map((researcher) => (
          <li key={researcher.id}>{researcher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Researchers;
