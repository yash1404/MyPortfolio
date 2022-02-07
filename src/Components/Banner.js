import React, { Component } from "react";
import "./Banner.css";
import banner from "../Image/banner.jpg";
import bubble from "../Image/bubble.png";
import resume from "../Image/Yash_Singh_Resume.pdf"
class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="Home" className="Home">
          <div className="container">
            <div className="row">
              {/*left side*/}
              <div className="col-lg-6 col-md-6">
                <div className="leftside">
                  <p>Hi There</p>
                  <br />
                  <h1>
                    I'M {""}
                    <span style={{ color: "var(--bg-color)" }}>Yash Singh</span>
                  </h1>
                  <h3>
                    I am a
                   <span className="profession">Frontend Developer</span>
                  
                  </h3>

                  <div className="buttons">

                    <a className="resume" href={resume} download="resume.pdf">
                      <button>Resume</button>
                    </a>

                    <a
                      href="https://wa.link/ticv29"
                      target="_blank"
                      className="contact"
                    >
                      <button>Contact Me</button>
                    </a>
                  </div>
                </div>
              </div>
              {/*right side*/}
              <div className="col-lg-6 col-md-6">
                <div className="image">
                  <img src={banner} alt="banner"></img>
                </div>
              </div>
            </div>
          </div>
          
          {/*bubbles images */}
         <div className="bubbles">

           <img src={bubble} alt="bubble" className=" bubble bubbleone"/>
           <img src={bubble} alt="bubble" className="  bubbling bubbletwo"/>
           <img src={bubble} alt="bubble" className=" bubble bubblethree"/>
           <img src={bubble} alt="bubble" className="  bubbling bubblefour"/>

    </div>
 

        </section>
      </React.Fragment>
    );
  }
}
export default Banner;
