import React from 'react';
import '../styles/DocumentaryList.css';

function DocumentaryList({ documentaries, updateDocumentary, removeDocumentary }) {
  const handleEdit = (id) => {
    const title = prompt("Movo Título:");
    const description = prompt("Nova Descrição:");
    updateDocumentary({ id, title, description });
  };

  return (
    <div className="documentary-list">
      {documentaries.map(doc => (
        <div key={doc.id} className="documentary-item">
          <h2>{doc.title}</h2>
          <p>{doc.description}</p>
          <button onClick={() => handleEdit(doc.id)}>Edit</button>
          <button onClick={() => removeDocumentary(doc.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default DocumentaryList;
