import "./ProjectCardStyles.css";

import React from 'react'

const ProjectCard = (props) => {
  return (
    <article className="project-card">
      <img src={props.imgsrc} alt="picture_website" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        <a target="blank" href={props.view} className="btn">Odkaz</a>
      </div>
    </article>
  )
}

export default ProjectCard