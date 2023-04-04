import React from "react"
import "./projects.css"
import ProjectCards from "./ProjectCards"

const Projects  = ( ) => {
    return(<>
<div className="project-containor">
    <h1 className="project-heading">Projects</h1>
    <div className="projects-card-holder">
   <ProjectCards></ProjectCards>
    </div>
</div>
    </>)
}

export default Projects