import React, { useState } from 'react';
import '../styles/DocumentaryForm.css'; 

function DocumentaryForm({ addDocumentary }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocumentary({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="documentary-form">
      <input 
        type="text" 
        placeholder="Titulo" 
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Descrição" 
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <button type="submit">Add Documentary</button>
    </form>
  );
}

export default DocumentaryForm;
