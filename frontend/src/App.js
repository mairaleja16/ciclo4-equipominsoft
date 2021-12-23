import React from "react";
import { BrowserRouter as 
  Router, 
  Route, 
  Switch} from "react-router-dom";
import Users from "./components/users/users";
import Projects from "./components/projects/projectsManagment";
import Navigation from "./components/navigation";
import Registro from "./components/users/registro";
import Inscriptions from "./components/projects/inscriptionToProjects";
import Progress from "./components/projects/projectsProgress";
import Profile from "./components/users/profile";
import Login from "./components/users/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/users" component={Users} />
          <Route path="/projects" component={Projects} />
          <Route path="/inscriptions" component={Inscriptions} />
          <Route path="/progress" component={Progress} />
          <Route path="/register" component={Registro} />
          <Route path="/profile" component={Profile} />
          <Route path="*">
            <h1>404 Not found</h1>
          </Route>
          <Users />
          <Registro />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
