import React from 'react'
import "./App.css"
import {Routes,Route} from "react-router-dom"
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Servicepage from "./Pages/Servicepage";
import Skillspage from "./Pages/Skillspage";
import Projectpage from "./Pages/Projectpage";
import Contactpage from "./Pages/Contactpage";
function App() {
  return (
    <div>
     <Routes>
     <Route exact={true} path="/" element={<Homepage/>}></Route>
     <Route path="/About" element={<Aboutpage/>}></Route>
     <Route path="/Service" element={<Servicepage/>}></Route>
     <Route path="/Skill" element={<Skillspage/>}></Route>
     <Route path="/Contact" element={<Contactpage/>}></Route>
     <Route path="/Project" element={<Projectpage/>}></Route>
     </Routes>
    </div>
  )
}

export default App
