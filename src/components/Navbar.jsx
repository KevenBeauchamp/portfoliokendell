import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import igPicture from "../assets/instagram.png";
import linkedinPicture from "../assets/linkedin.png";
import githubPicture from "../assets/github.png";
import pdf from "../assets/keven.pdf";
export default function Navbar() {
 const onButtonClick = () => {
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume_Keven.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const [menuOpen, setMenuOpen] = useState(false);
useEffect(()=>{

window.addEventListener("scroll",()=>{
if(window.scrollY > 50){
document.querySelector(".navbar").classList.add("scrolled")
}else{
document.querySelector(".navbar").classList.remove("scrolled")
}
})

},[])

return (

<motion.nav 
className="navbar"
initial={{ y: -80 }}
animate={{ y: 0 }}
transition={{ duration: 0.5 }}
>

<h2 className="logo">Kendell Tech</h2>

<div
className={`hamburger ${menuOpen ? "active" : ""}`}
onClick={() => setMenuOpen(!menuOpen)}
>
<span></span>
<span></span>
<span></span>
</div>

<ul className={`nav-links ${menuOpen ? "open" : ""}`}>

<li>
<Link to="hero" smooth duration={500} onClick={()=>setMenuOpen(false)}>
Home
</Link>
</li>

<li>
<Link to="about" smooth duration={500} onClick={()=>setMenuOpen(false)}>
About
</Link>
</li>

<li>
<Link to="projects" smooth duration={500} onClick={()=>setMenuOpen(false)}>
Projects
</Link>
</li>

<li>
<Link to="skills" smooth duration={500} onClick={()=>setMenuOpen(false)}>
Skills
</Link>
</li>

<li>
<Link to="contact" smooth duration={500} onClick={()=>setMenuOpen(false)}>
Contact
</Link>
</li>
<li>
<div className="socialMob">
    <span><a href="https://www.instagram.com/kendell_tech/"><img src={igPicture} alt="" srcset="" width="25px" /></a></span>
    <span><a href="https://www.linkedin.com/in/keven-beauchamp-276551298" target="_blank"><img src={linkedinPicture} alt="" srcset="" width="25px"/></a></span>
    <span><a href="https://github.com/KevenBeauchamp" target="_blank"><img src={githubPicture} alt="" srcset="" width="25px" /></a></span>
</div>
</li>
{/* <li>
<div className="downloadResume">
    <span><motion.button
    onClick={onButtonClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn"
                        >
                            Get Resume
                        </motion.button></span>
</div>
</li> */}
</ul>

</motion.nav>

)
}