import React,{useState}from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

function Navbar() {

    const [toggle,settoggle]=useState(false);
    
    return (
        <React.Fragment>

        <nav className='navigation'>

        <div className='logo'>
        <p>YASH.</p>
        </div>

        <div>
        <ul className={toggle?"toggling menulist":"menulist"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to ="/Service">Service</Link></li>
        <li><Link to="/Skill">Skills</Link></li>
        <li><Link to ="/Project">Project</Link></li>
        <li><Link to ="/Contact">Contact</Link></li>
        </ul>
        </div>

        <div onClick={()=>settoggle(!toggle)} className='togglebtn'>
        <span><i className='fas fa-bars'></i>
        </span>
        </div>
    
        </nav>
        
        </React.Fragment>
      
    )
}

export default Navbar
