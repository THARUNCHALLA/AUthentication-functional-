import {NavLink} from "react-router-dom"

import "./index.css"
import { useContext } from "react"
import LanguageContext from "../../Context/LanguageContaxt"
const Navbar=()=>{
  const {user,logout} = useContext(LanguageContext)
return(
        <div className="Container">
          <nav><NavLink to="/">Home</NavLink></nav>
          <nav><NavLink to="/About">About</NavLink></nav>
          <nav><NavLink to="/Contact">Contact</NavLink></nav>
          <nav><NavLink to="/Projects">Projects</NavLink></nav>
          <nav><NavLink to="/Users">Users</NavLink></nav>
          { user ? <nav><NavLink to="/Logout" onClick={logout}>logout</NavLink></nav>:<nav><NavLink to="/Login">login</NavLink></nav>}
        </div>
    )
}

export default Navbar