import React from "react";
import"./Service.css"
import Tilt from "react-parallax-tilt"


function Service() {
  return (
    <React.Fragment>
      <section id="Service" class="Service">
     
        <div className="box">
          <div className="topservice">
            <h3>What I Do </h3>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
              <Tilt  gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
      
              <div className="common">
              <h1>PSD TO HTML</h1>
              <p>
                I have good experience in converting <b>psd to html.</b>I
                easily understand the design and convert it into working
                website. Below i mention some project which is related to
                psd to html you can check it. A website which i make is fully responsive which is suitable for the mobile,Tablet,Desktop view.                
                 </p>
              <a className="msgbtnone" href="https://wa.link/ticv29" target="_blank">
                <button>Send Message</button>
              </a>
            </div>
              </Tilt>
              </div>
              <div className="col-lg-4 col-md-4">
              <Tilt  gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
              <div className="common">
              <h1>BOOTSTRAP WEBSITE</h1>
              <p>
                Bootstrap is a css <b>framework</b> it is used for making the website responsive so i had created a more than <b>10</b> to <b>15</b> wesbite with bootstrap.I have good graps on bootsratp grid system it is mainly used for aligning the content horizontaly and vertically. I have good clearity of all the concept of bootstrap,You can message me by just clicking the button below.
              </p>
              <a className="msgbtntwo" href="https://wa.link/ticv29" target="_blank">
                <button>Send Message</button>
              </a>
            </div>
              </Tilt>

              </div>
              <div className="col-lg-4 col-md-4">
              <Tilt  gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
              <div className="common">
              <h1>REACTJS WEBSITE</h1>
              <p>
               As i am also a <b>Reactjs Developer</b> so i also create a website using reactjs. I had almost created <b>15 project</b> using ReactJS.Creating a website using reactjs gives more comfort or easiness because react js has its own uniqueness it has a concept of resuable component and with react we can easily create a single page website using some concept of reactjs.
              </p>
              <a className="msgbtnthree" href="https://wa.link/ticv29" target="_blank">
                <button>Send Message</button>
              </a>
            </div>
              </Tilt>

              
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Service;
