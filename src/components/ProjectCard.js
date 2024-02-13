import "./ProjectCardStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <article className="project-card">
      <img src={props.imgsrc} alt="picture_website" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        <NavLink to={props.view} className="btn">Odkaz</NavLink>
      </div>
    </article>
  )
}

export default ProjectCard