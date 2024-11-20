import React, { useState } from 'react';
import axios from 'axios';
import './ResearchPostingForm.css';

function ResearchPostingForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://research-finder-1000.firebaseio.com', {
        title,
        description,
        supervisor,
        requiredSkills,
        duration,
        location,
      });

      // Handle successful research post, e.g., show a success message or redirect
      console.log('Research opportunity posted successfully:', response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error('Error posting research opportunity:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Supervisor:
        <input type="text" value={supervisor} onChange={(e) => setSupervisor(e.target.value)} />
      </label>
      <label>
        Required Skills:
        <input type="text" value={requiredSkills} onChange={(e) => setRequiredSkills(e.target.value)} />
      </label>
      <label>
        Duration:
        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <button type="submit">Post Research Opportunity</button>
    </form>
  );
}

export default ResearchPostingForm;
