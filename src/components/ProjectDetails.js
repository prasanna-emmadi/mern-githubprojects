import React from "react";

const ProjectDetails = (props) => {
  console.log("ProjectDetails props");
  console.log(props);
  const { name, description, url } = props.location.state;

  return (
    <div style={{ marginTop: 10 }}>
      <h4>Project Details</h4>
      <p>{name}</p>
      <p>{description}</p>
      <a href={url} className="navbar-link">{url}</a>
    </div>
  );

}

export default ProjectDetails;
