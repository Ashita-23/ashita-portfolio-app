import React from "react"
import "./skillcard.css"


const SkillCards = ()=>{
    return(<>
<div className="card-outer">
<figure className="card-img-box">
    <img className="skill-img" src={""} alt="" />
</figure>
<figcaption className="skill-name"><a href="#skillName">{"Skill Name"}</a></figcaption>
</div>
    </>)
}

export default SkillCards