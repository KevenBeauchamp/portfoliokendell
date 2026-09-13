import React from "react";
import "../cardAllProjects.css";
import { motion } from "framer-motion";

export default function CardAllProject (
  {title,
  description,
  tech,
  stars,
  images,
  link = "#",
  buttons
}
) {
  return (
     <motion.div
      className="project-card"
      whileHover={{
        scale: 1.05,
        y: -8
      }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="card-tops">
        <h4 className="project-title">{title}</h4>
        <img src={images} alt={title} className="img-preview" />
        <div className="card-content">
         
          <p className="project-desc">{description}</p>
        </div>        
      </div>

      <div className="card-bottom">
        <span className="stars"> {tech}</span>

        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="view-btn">{buttons}</button>
        </a>
      </div>
  
    </motion.div>
  );
  // );
};