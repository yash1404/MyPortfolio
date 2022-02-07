import React from "react";
import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";
import Movetotop from "./Movetotop";
import emailjs from "emailjs-com";

function Contact() {
  const sendmail = (e) => {
    emailjs
      .sendForm(
        "service_wc1zw5r",
        "template_4frv70m",
        e.target,
        "user_t3zHjO3GilVsBTZ7JyCB2"
      )
      .then((res) => {
        alert("Your message has been successfully sent !!");
      })
      .catch((error) => {
        console.log(error);
      });
      e.target.reset();
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <section className="contacting" id="Contact">
        <div className="maincontainer">
          <div className="leftsidediv">
            <div className="innerleft">
              <h4>Contact Me</h4>
              <div className="personal-info">
                <div className="address">
                  <GoLocation className="locationicon" />
                  <p>
                    <b>Kalyan,Maharashtra</b>
                  </p>
                </div>
                <div className="contactnum">
                  <BsPhone className="phoneicon" />
                  <p>
                    <b>918104798701</b>
                  </p>
                </div>
                <div className="email">
                  <AiOutlineMail className="emailicon" />
                  <p>
                    <b>yashe045@gmail.com</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightsidediv">
            <div className="form-control">
              <p>Get In Touch </p>
              <span>feel free to message me for any query.</span>

              <form className="form" onSubmit={sendmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  id="Yourname"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  id="Yourname"
                />
                <textarea
                  cols="20"
                  rows="6"
                  name="message"
                  placeholder="message"
                  id="msg"
                />

                <button type="submit">SEND</button>
              </form>
            </div>
          </div>
        </div>
        {/*movrtotop*/}
        <Movetotop />
      </section>
    </React.Fragment>
  );
}

export default Contact;
