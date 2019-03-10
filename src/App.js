import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";
import Public from "./components/public";
import Login from "./components/Login";
import Register from "./components/Register";
import GitHubProjects from "./components/GitHubProjects";
import GitHubUsername from "./components/GitHubUsername";
import ProjectDetails from "./components/ProjectDetails";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo app</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/home" className="navbar-link col-sm-2">Todos</Link>
                </li>
                <br />
                <li className="navbar-item">
                  <Link to="/home/create" className="navbar-link col-sm-2">Create Todo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/home/githubUsername" className="navbar-link col-sm-2">Projects</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={Public} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <PrivateRoute path="/home" exact component={TodoList} />
          <PrivateRoute path="/home/edit/:id" component={EditTodo} />
          <PrivateRoute path="/home/create" component={CreateTodo} />
          <PrivateRoute path="/home/githubUsername" component={GitHubUsername} />
          <PrivateRoute path="/home/githubProjects" component={GitHubProjects} />
          <PrivateRoute path="/home/projectDetails" component={ProjectDetails} />

        </div>
      </Router>
    );
  }
}

export default App;
