import { Link,Outlet } from "react-router-dom"
import "./index.css"

const Projects=()=>{
    return(
        <div>
            <h1>Projects</h1>
            <nav className="tharun">
            <Link to="/projects/FeaturedProjects" className="tharun12">FeaturedProjects</Link>
            <Link to="/projects/NewProjects">NewProjects</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Projects