import "./ProjectCardStyles.css";

import React from 'react'
import ProjectCard from "./ProjectCard";
import ProjectCradData from "./ProjectCardData";


const Work = () => {
  return (
    <section className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {ProjectCradData.map((val, ind) =>{
            return (
                <ProjectCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                />
            )
          })}
        </div>
    </section>
  )
}

export default Work