import Users from "./components/users/users";
import React from "react";
import Navigation from "./components/navigation";
import Registro from "./components/users/inscriptions";



function App() {
  return (
    <div className="App">
      <Navigation />
      <Users/>
      <Registro/>
    </div>
  );
}

export default App;
