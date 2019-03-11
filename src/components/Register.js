import React from "react";
import { withRouter } from "react-router-dom";
import Auth from './Auth';

class Register extends React.Component {
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
    console.log('onUsernameChange' + e.target.value);
    this.setState({ username: e.target.value });
  }

  onPasswordChange(e) {
    console.log('onPassChange' + e.target.value)
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    console.log('register onSubmit');
    e.preventDefault();
    
    Auth.register(this.props.history, this.state)
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
      <form onSubmit={this.onSubmit}>
        <h3>Register</h3>
        <div className="form-group">
          <label>username</label>
          <input type="text"
            className="form-control"
            value={this.state.username}
            onChange={this.onUsernameChange} />
        </div>
        <div className="form-group">
          <label>password</label>
          <input type="text"
            className="form-control"
            value={this.state.password}
            onChange={this.onPasswordChange} />
        </div>
        <div>
          <input type="submit" value="Register" className="btn btn-primary"/>
        </div>
      </form>
    );
  }
}

export default withRouter(Register);
