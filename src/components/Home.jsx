import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Project'
import Skills from './Skill'
import Contact from './Contact'
import Education from './Education'
import { motion } from "framer-motion";

export default function HomePage(params) {
    return(
        <>
            <Navbar />
            <Hero />
            <motion.div
            initial={{ opacity: -5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration:8 }}
            >
            <Projects />
            </motion.div>
            <motion.div
            initial={{ opacity: -5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
            >
            <Skills />
            </motion.div>
            <motion.div
            initial={{ opacity: -5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
            >
            <About />
            </motion.div>
            <motion.div
            initial={{ opacity: -5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 4 }}
            >
            <Contact />
            </motion.div>
            
            {/* <Education /> */}
        </>
    )
    
}