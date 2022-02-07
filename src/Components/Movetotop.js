import React,{useState} from 'react';
import {FaArrowCircleUp} from "react-icons/fa"

const Movetotop = () => {
    const movetotopbtn={
        position:"fixed",
        right:"30px",
        bottom:"40px",
        fontSize:"3rem",
        cursor:"pointer",
        zIndex:1000,
    }

    
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return <React.Fragment>
  <div style={movetotopbtn}>
  <FaArrowCircleUp onClick={scrollToTop} 
   style={{display: visible ? 'inline' : 'none'}} 
/>
 </div>
  
  </React.Fragment>;
};

export default Movetotop;
