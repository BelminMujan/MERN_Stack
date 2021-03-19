import React from "react"
import './App.css';
import Register from "./components/register/register"
import Home from "./components/home/homePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NewTask from "./components/newTask/newTask"


function App() {
 
 
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" exact component={Home}/>
          <Route path="/"  component={Register}/>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
