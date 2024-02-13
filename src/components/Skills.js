import "./Skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const Skills = () => {
  return (
    <article className="sklils_section">
      <h2>Skills</h2>
      
      <p><span>Python</span>  <span> 
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                          </span>
      </p>
      <p><span>PHP</span>     <span>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                          </span>
      </p>
      <p><span>jQuery</span>  <span>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                          </span>
      </p>
      <p><span>React</span>   <span>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                          </span>
      </p>
      <p><span>HTML</span>    <span>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                          </span>
      </p>
      <p><span>CSS</span>     <span>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                          </span>
      </p>
      <p><span>SCSS</span>    <span>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} className="star"/>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                          </span>
        </p>
      
    </article>
  )
}

export default Skills