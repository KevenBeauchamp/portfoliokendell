import imageTed from "../assets/hero_img.jpg"
import igPicture from "../assets/instagram.png";
import linkedinPicture from "../assets/linkedin.png";
import githubPicture from "../assets/github.png";
import imageKeven from "../assets/kevenB.jpg"
import imageKev from "../assets/kev.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

export default function Hero(){
    return(
        <>
             <section className="hero" id="hero">
                <div>
                    {/* <img src={imageKeven} alt=""  srcset="" /> */}
                    <motion.img
                        src={imageKeven}
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4
                        }}
                    />
                </div>
                <div>
                     <motion.h1
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 8 }}
                    >
                        Hi, I'm Keven Beauchamp
                    </motion.h1>
                    <h3>
                        <Typewriter
                            words={[
                                "Full Stack Developer",
                                "Building Secure Infrastructure & Applications",
                                "CCNA & Security+ Certified"
                            ]}
                            loop
                            cursor
                        />

                        </h3>
                    <p>
                    
                     <TypeAnimation
                             sequence={[
                               "I build modern web applications with React, Laravel, and secure APIs....",
                               1000,
                               "I create many labs",
                               1000,
                               "We can build something together",
                               1000
                             ]}
                             wrapper="span"
                             speed={50}
                           />
                    </p>
                    <div className="social">
                        <span><a href="https://www.instagram.com/kendell_tech/" target="_blank"><img src={igPicture} alt="" srcset="" width="25px" /></a></span>
                        <span><a href="https://www.linkedin.com/in/keven-beauchamp-276551298" target="_blank"><img src={linkedinPicture} alt="" srcset="" width="25px"/></a></span>
                        <span><a href="https://github.com/KevenBeauchamp" target="_blank"><img src={githubPicture} alt="" srcset="" width="25px" /></a></span>
                    </div>
                    <Link to="contact">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn"
                        >
                            Let's Connect
                        </motion.button>
                    </Link>
        

      <h2>
        
      </h2>
                </div>
                 
            </section>
        </>
    )
}  