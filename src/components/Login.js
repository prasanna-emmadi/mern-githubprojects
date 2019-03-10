import React from "react";
import { withRouter } from "react-router-dom";
import Auth from './Auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    Auth.login(this.props.history, this.state)
      .then(res => {
        console.log(res);
        this.setState({
          username: '',
          password: ''
        });
      })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>username</label>
            <input type="input"
              className="form-control"
              value={this.state.username}
              onChange={this.onUsernameChange} />
          </div>
          <div className="form-group">
            <label>password</label>
            <input type="input"
              className="form-control"
              value={this.state.password}
              onChange={this.onPasswordChange} />
          </div>
          <div className="form-group btn-toolbar">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
          <div className="form-group">
            <label>New user</label>
            <br />
            <button className="btn btn-primary" onClick={() => this.props.history.push('/register')}>
              Register
              </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);