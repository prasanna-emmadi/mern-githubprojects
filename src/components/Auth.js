import axios from 'axios';
import { server } from "../config/server";
axios.defaults.withCredentials = true;

const Auth = {
  isAuthenticated: false,
  login(history, credentials) {
    const url = server.host + '/login';
    return axios.post(url, {
      ...credentials
    })
      .then(res => {
        console.log('logged in response ' + res);
        if (res.data.login) {
          this.isAuthenticated = true;
          history.push("/home")
        } else {
          history.push("/")
        }
        return Promise.resolve('loggedin');
      });
  },
  logout(history) {
    const url = server.host + '/logout';
    return axios.get(url)
      .then(() => {
        this.isAuthenticated = false;
        history.push("/")
      })
      .catch(e => {
        console.error("error in logout " + e.message);
        history.push("/");
      })
  },
  register(history, credentials) {
    console.log({credentials});
    const url = server.host + '/register';
    return axios.post(url, {
      ...credentials
    })
      .then(res => {
        console.log('registered response ' + res);
        history.push("/login")
        return Promise.resolve('loggedin');
      });
  },

};

export default Auth;