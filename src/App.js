import React, { useState } from 'react';
import DocumentaryList from './components/DocumentaryList';
import DocumentaryForm from './components/DocumentaryForm';
import './styles/App.css';

function App() {
  const [documentaries, setDocumentaries] = useState([
    { id: 1, title: 'Senna: O Brasileiro, O Herói, O Campeão', description: 'A história do ídolo brasileiro da Formula 1, Ayrton Senna. Toda sua trajetória do tricampeão mundial, contada desde a ascensão no automobilismo até sua morte em pleno GP de San Marino, em 1994.' },
    { id: 2, title: 'Charlie: A vida e a Arte de Charles Chaplin', description: 'Narrado por Sydney Pollack, o filme conta a vida do ator, diretor e produtor, Charles Chaplin, desde sua infância até sua morte em 1977. Contém imagens raras de arquivo, comentários de familiares e amigos, e entrevistas com celebridades de Hollywood, como Woody Allen e Johnny Depp. O filme aborda também a trajetória cinematográfica de Chaplin. ' }
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
