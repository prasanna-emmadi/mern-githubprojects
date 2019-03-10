import React from "react";
import axios from 'axios';
import { server } from "../config/server";
axios.defaults.withCredentials = true;

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    //network request
    const url = server.host + '/todos/';
    axios.get(url)
      .then(response => {
        const todos = response.data;
        console.log({todos});
        this.setState(prevState => {
          return {
            ...prevState,
            todos
          }
        })
      })
      .catch(err => console.error("error in fetching todos" + err.message));
  }

  render() {
    return (
      <div>
        <p>Welcome to TodoList component</p>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <li key={todo._id}>
                {todo.description}
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}
