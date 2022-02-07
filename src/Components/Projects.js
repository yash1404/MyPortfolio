import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import projectone from "../Image/projectone.png";
import projecttwo from "../Image/projecttwo.png";
import projectthree from "../Image/projectthree.png";
import projectfour from "../Image/projectfour.png";
import projectfive from "../Image/projectfive.png";
import projectsix from "../Image/projectsix.png";
import"./Projects.css"

function Projects() {

  const options={
    items:2,
    loop:true,
    dots:false,
    margin:10,
    autoplay:true,
    autoplayHoverPause:true,
    autoplaySpeed:2000,
    autoplayTimeout:2500,
    responsive: {
      0: {
          items: 1,
      },
    
      600: {
          items: 1,
      },
      992: {
          items: 2,
      },
     
  },

  }
  return (
    <React.Fragment>
      <section className="Project" id="Project">

        <div className="topskill">
          <h3>Projects</h3>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*owl carousel strats here */}

              <OwlCarousel
                className="owl-theme" {...options} >
                <div className="item">
                  <div className="works">
                    <img src={projectone} alt="workone"></img>
                    <div className="projectinfo">
                      <p>
                        This project is all about interior design which i have
                        made with custom <b>html css javascript</b> a website is
                        totally responsive.
                      </p>
                      <a target="_blank" href="https://yash1404.github.io/InteriorSite/">
                        <button>View Project</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="works">
                    <img src={projecttwo} alt="workone"></img>
                    <div className="projectinfo">
                      <p>
                        This project is all about industrial Site which i have
                        made with custom <b>html css javascript</b> a website is
                        totally responsive. And in this website i used some
                        premade plugins.
                      </p>
                      <a target="_blank" href="https://yash1404.github.io/industrialsite/">
                        <button>View Project</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="works">
                    <img src={projectfive} alt="workone"></img>
                    <div className="projectinfo">
                      <p>
                        This website is all about checking the Weather of your
                        city,country just by typing the city name .You can get
                        the detail of <b>temperetaure,weather,degree</b> and all
                        that stuffs. And this is also responsive you can use
                        anywhere anytime.
                      </p>
                      <a  target="_blank" href="https://yash1404.github.io/weatherchecker/">
                        <button>View Project</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="works">
                    <img src={projectfour} alt="workone"></img>
                    <div className="projectinfo">
                      <p>
                        This web application is all about taking the note .You
                        can use this app on a daily basis to keep your daily
                        notes .After using this website you feel great .I
                        develop this website using <b>ReactJs</b>.
                      </p>
                      <a target="_blank" href="https://yash1404.github.io/NoteTaker-App/">
                        <button>View Project</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="works">
                    <img src={projectthree} alt="workone"></img>
                    <div className="projectinfo">
                      <p>
                        This website content smart design which i have develop
                        with custom <b>html css javascript bootstrap</b> a
                        website is totally responsive.
                      </p>
                      <a target="_blank" href="https://yash1404.github.io/Smart/">
                        <button>View Project</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="works">
                    <img src={projectsix} alt="workone"></img>
                    <div className="projectinfo">
                      <p>
                        This is a snake game web application where we can play a
                        snake game .And i have given a functionality where we
                        can set our <b>Score</b> <b>Highscore</b>.But this
                        application is accessible only on{" "}
                        <b>Desktop,Laptop device</b>.
                      </p>
                      <a target="_blank"  href="https://yash1404.github.io/Snake-Game/">
                        <button>View Project</button>
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  );
}

export default Projects;
