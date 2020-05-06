import React from "react";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title="Batata">
        <ul>
          <li>Manteiga</li>
          <li>Alecrim</li>
        </ul>
      </Header>
      <Header title="Frita">
        <ul>
          <li>Ketchup</li>
          <li>Sal</li>
          <li>Vinagre</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
