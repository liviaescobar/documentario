import React, { useState } from 'react';
import DocumentaryList from './components/DocumentaryList';
import DocumentaryForm from './components/DocumentaryForm';
import './styles/App.css';

function App() {
  const [documentaries, setDocumentaries] = useState([
    ]);

  const addDocumentary = (documentary) => {
    setDocumentaries([...documentaries, { ...documentary, id: Date.now() }]);
  };

  const updateDocumentary = (updatedDocumentary) => {
    setDocumentaries(documentaries.map(doc => doc.id === updatedDocumentary.id ? updatedDocumentary : doc));
  };

  const removeDocumentary = (id) => {
    setDocumentaries(documentaries.filter(doc => doc.id !== id));
  };

  return (
    <div className="App">
      <h1>Lista de Documentários</h1>
      <DocumentaryForm addDocumentary={addDocumentary} />
      <DocumentaryList 
        documentaries={documentaries} 
        updateDocumentary={updateDocumentary}
        removeDocumentary={removeDocumentary} 
      />
    </div>
  );
}

export default App;
