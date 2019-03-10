import React from "react";
import { withRouter } from "react-router-dom";

class GithubUsername extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname:"/home/githubProjects",
      state: {username: this.state.username}
    });
  }


  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Github Username</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text"
              className="form-control"
              onChange={this.onUsernameChange}
              value={this.state.username}
            />
          </div>
          <div>
            <input type="submit" value="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(GithubUsername);