import React from "react"
import "./home.css"

const Home = () =>{ 
    return(<>
  <div className="intro-containor">
    <div className="intro-subcontainor">
    {/* intro text  */}
        <div className="about-intro-text">
            <p>hi , I am Asita.</p>
            <p>i am a frontend developer.</p>
            <p>i am an proud indian.</p>
            <button className="intro-btn">Contact me </button>
        </div>
    {/* intro animation */}
        <div className="about-intro-anime">
        
            <p>i am a frontend developer.</p>
            <p>i am an proud indian.</p>

        </div>
    </div>
  </div>
    </>)
}

export default Home