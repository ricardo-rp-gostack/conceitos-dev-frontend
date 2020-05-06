import React, { useState } from "react";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Batata" />
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}

        <button type="button" onClick={handleAddProject}>
          Adicionar projeto
        </button>
      </ul>
    </>
  );
}

export default App;
