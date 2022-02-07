import  React from "react"
import Aboutimg from "../Image/About.jpg"
import "./About.css"
import Tilt from "react-parallax-tilt"

const About =()=>{
return(
    <React.Fragment>
    <section id="About" className="About">
    <div className="container">
    <div className="row">
    <div className="col-lg-5">
    <div className="aboutleft">
    <div className="myimg">
    <img src={Aboutimg} alt="about"></img>
    
    </div>
    </div>
    </div>
    <div className="col-lg-7">
    <Tilt  gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
    <div className="aboutright">
    <h1 className="aboutme">About Me</h1>

    <p className="intro">
    <span style={{fontSize:"2rem"}}>Hello,</span><br/>
    My self <b>YASH SINGH </b> and I'm from kalyan maharashtra.I am learning <b>FrontEnd development</b> Since <b>1.5 years</b>,I have done many project using FrontEnd technology and i had also given my service to my college <b>Friends.</b><br/><br/>What i basically do is developing a User Interface which means I convert the Particular design into <b>working website</b>.And also i'm proficient in making responsive website.I will assure you i will do the job in your company with full <b>honesty</b> and <b>determination</b>.
    </p>

   <div className="hireme">
   <a target="_blank" href= "https://www.linkedin.com/in/yash-singh-360456212"><button>Hire Me</button></a>
   </div>
    </div>
    
    </Tilt>

    </div>
    
    </div>    
    </div>
    </section>
    
    
    </React.Fragment>
)
}
export default About