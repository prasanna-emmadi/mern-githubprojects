import React from "react";
import { Link } from "react-router-dom";

const Octokit = require('@octokit/rest')
const octokit = new Octokit()

class GitHubProjects extends React.Component {
  constructor(props) {
    super(props);
    console.log('GitHubProjects constructor');
    console.log(props);
    this.state = {
      projects: [],
      username: props.location.state.username
    };
    this.fetchProjects = this.fetchProjects.bind(this);
  }

  fetchProjects() {
    if (!this.state.username) return
    octokit.repos.listForUser({ username: this.state.username, type: 'all' })
      .then(result => {
        const projects = result.data.map(project => {
          return {
            name: project['full_name'],
            description: project.description,
            url: project['html_url']
          }
        })
        this.setState(prevState => {
          return {
            ...prevState,
            projects
          }
        })
      });
  }

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.projects.map(project => {
            //<Link to="ideas" params={{ testvalue: "hello" }}>Create Idea</Link>
            return (
              <li key={project.name}>
                <Link 
                  to={{
                    pathname:"/home/projectDetails",
                    state: project
                  }}
                  className="navbar-link col-sm-2"
                >
                  {project.name}
                </Link>
              
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default GitHubProjects;