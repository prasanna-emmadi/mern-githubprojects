import React from "react";

const ProjectDetails = (props) => {
  console.log("ProjectDetails props");
  console.log(props);
  const { name, description, url } = props.location.state;

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Project Details</h3>
      <p>{name}</p>
      <p>{description}</p>
      <p>{url}</p>
    </div>
  );

}

export default ProjectDetails;