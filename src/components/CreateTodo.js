import React from "react";
import axios from "axios";
import { server } from "../config/server";
axios.defaults.withCredentials = true;


export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      priority: '',
      completed: false,
      responsible: ''
    }

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
    this.onChangeResponsible = this.onChangeResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangePriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  onChangeCompleted(e) {
    this.setState({
      completed: e.target.value
    });
  }

  onChangeResponsible(e) {
    this.setState({
      responsible: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const url = server.host + '/todos/add'
    const body = this.state;
    axios.post(url, {
      ...body
    })
      .then(res => {
        console.log({ state: this.state });
        this.setState({
          description: '',
          priority: '',
          completed: false,
          responsible: ''
        });
      })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description</label>
            <input type="text"
              className="form-control"
              onChange={this.onChangeDescription}
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label>Responsible</label>
            <input type="text"
              className="form-control"
              onChange={this.onChangeResponsible}
              value={this.state.responsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input type="radio"
                className="form-check-input"
                name="PriorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.priority === "Low"}
                onChange={this.onChangePriority}
              />
              <label className="form-check-label">Low</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio"
                className="form-check-input"
                name="PriorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.priority === "Medium"}
                onChange={this.onChangePriority}
              />
              <label className="form-check-label">Medium</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio"
                className="form-check-input"
                name="PriorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.priority === "High"}
                onChange={this.onChangePriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>

          <div>
            <input type="submit" value="Create Todo" className="btn btn-primary" />
          </div>

        </form>
      </div>
    );
  }
}