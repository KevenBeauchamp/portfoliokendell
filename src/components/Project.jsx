import { Link } from "react-router-dom";
import { projects } from "../data";
import CardProject from "./cardProject";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="section">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <CardProject key={index} {...project} />
            ))}
        </div>
        <div> 
          <Link to="/allprojects">
             {/* <button className="btn space">All Projects</button> */}
          </Link>
                            
        </div>



    </section>
  );
}

 