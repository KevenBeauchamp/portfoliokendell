import { Allprojects } from "../data.js";
import { motion } from "framer-motion";
import Navbar from './Navbar'
import CardAllProject from "./CardAllProject.jsx";
import { useNavigate } from "react-router-dom";

export default function AllProjects() {
    const navigate = useNavigate();
  return (
    <>
        <Navbar />
        <section id="projects" className="section">
            <button onClick={() => navigate(-1)} className="btn leftSide">← Back</button>
            <h1>All Projects</h1>
            <div className="projects-grids">
                {Allprojects.map((project, index) => (
                    <CardAllProject key={index} {...project} />
                ))}
            </div>
        </section>
    </>
  );
}

 