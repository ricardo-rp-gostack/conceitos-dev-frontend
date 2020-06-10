import React, { useState, useEffect } from "react";
import api from './services/api'

import './App.css'

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(res => {
      setProjects(res.data)
    })
  }, [])

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Batata" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}

        <button type="button" onClick={handleAddProject}>
          Adicionar projeto
        </button>
      </ul>
    </>
  );
}

export default App;
