import CertificationCard from "./CertificationCard";
import "../certification.css"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function About(){
      const text  = "Adaptable IT specialist with over two years of know-how in comprehensive development, network engineering, and digital security. I have the Cisco Certified Network Associate (CCNA), CompTIA network + and Security+ certifications. I have experience designing safe networks for businesses and building web applications that are ready to be used. I know a lot about keeping computers safe, creating connections between computers, setting up firewalls, and fixing network problems. Enthusiastic about constructing reliable, expandable systems, from the foundation to the application layer."
    const certifications = [
  {
    title: "CompTIA Security+",
    issuer: "Issued by CompTIA",
    image: "src/assets/security+.webp",
    link: "#",
  },
   {
    title: "CompTIA Network+",
    issuer: "Issued by CompTIA",
    image: "src/assets/networks.png",
    link: "#",
  },
  {
    title: "Cisco CCNA",
    issuer: "Issued by Cisco - 2024",
    image: "src/assets/ccna.png",
    link: "#",
  },
  {
    title: "IBM Full Stack Developer",
    issuer: "Issued by IBM - 2024",
    image: "src/assets/ibm.png",
    link: "#",
  },
];
    return(
        <>
            <section  id="about">
                        <h1 className="title">About Me</h1>
                <div className="about">
                    <div className="picSide"><img src="../../public/test.jpg" alt="" srcset="" /></div>
                    <div className="descriptionSide">
                        <div className="aboutMe">
                          <TypeAnimation
                              sequence={[
                                text,
                                1000,
                                
                              ]}
                              wrapper="span"
                              speed={70}
                            />
                        </div>
                        <div className="certification">
                            {/* <section className="skills-section"> */}
                              <div className="skills-header">
                                <h3 className="title">Certifications</h3>
                              </div>
                              
                              <div className="skills-grid">
                                {certifications.map((skill, index) => (
                                  <CertificationCard key={index} {...skill} />
                                ))}
                              </div>
                            {/* </section> */}
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}