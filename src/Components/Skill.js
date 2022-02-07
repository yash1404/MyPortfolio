import React from "react";
import "./Skill.css";

function Skill() {
  return (
    <section className="Skill" id="Skills">
      <div className="topskill">
        <h3>Skills</h3>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2">

          <div className="skillbar">

          <div class="radialProgressBar progress-90">
          <div class="overlay">90%
          </div>
        </div>

        <div className="skill-label">
        <p>HTML/CSS</p>
        </div>
          </div>
            
          </div>
          <div className="col-lg-2 col-md-2 px-5">
           <div className="skillbar">
           <div class="radialProgressBar progress-70">
           <div class="overlay">70%</div>
         </div>
         <div className="skill-label">
         <p>JAVASCRIPT</p>
         </div>
           </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <div className="skillbar">
            <div class="radialProgressBar progress-90">
              <div class="overlay">90%</div>
            </div>
            <div className="skill-label">
            <p>BOOTSTRAP</p>
            </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
           <div className="skillbar">
           <div class="radialProgressBar progress-80">
           <div class="overlay">80%</div>
         </div>
         <div className="skill-label">
         <p>SASS</p>
         </div>
           </div>
          </div>
          <div className="col-lg-2 col-md-2">
            <div className="skillbar">
            <div class="radialProgressBar progress-80">
              <div class="overlay">80%</div>
            </div>
            <div className="skill-label">
            <p>REACTJS</p>
            </div>
            
            </div>
          </div>
          <div className="col-lg-2 col-md-2">
           <div className="skillbar">
           <div class="radialProgressBar progress-90">
           <div class="overlay">90%</div>
         </div>
         <div className="skill-label">
         <p>GIT/GITHUB</p>
         </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
