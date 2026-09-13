import { motion } from "framer-motion";

export default function Skill(){
    return(
        <section id="skills" >
                    <h1 className="title">Skills</h1>
            <div className="skills">
              <div className="partSkill">
                          <table>
                            <caption>
                                Programming & Development
                            </caption>
                            {/* <motion.tr

initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 100 * 0.1 }}
>

<td>LAravel</td>
</motion.tr> */}
                            <tr>
                              <td>Laravel </td>
                            </tr>
                            <tr>
                              <td>React JS </td>
                            </tr>
                            <tr>
                              <td>HTML5 / CSS3 </td>
                            </tr>
                            <tr>
                              <td>Javascript</td>
                            </tr>
                            <tr>
                              <td>PHP</td>
                            </tr>
                            <tr>
                              <td>Python</td>
                            </tr>
                            <tr>
                              <td>Java </td>
                            </tr>
                            <tr>
                              <td>Node JS </td>
                            </tr>
                            <tr>
                              <td>SQL </td>
                            </tr>
                          </table>
              </div>
              <div className="partSkill">
                          <table>
                            <caption>
                                Networking & Security
                            </caption>
                            <tr>
                              <td>Routing &b Switching</td>
                            </tr>
                            <tr>
                              <td>IDS/IPS </td>
                            </tr>
                            <tr>
                              <td>Secure API Design</td>
                            </tr>
                            <tr>
                              <td>Firewall Configuration</td>
                            </tr>
                            <tr>
                              <td>SIEM</td>
                            </tr>
                            <tr>
                              <td> REST APIs</td>
                            </tr>
                            <tr>
                              <td>JWT Authentication</td>
                            </tr>
                          </table>
              </div>
               <div className="partSkill">
                          <table>
                            <caption>
                                Tools & Platforms
                            </caption>
                            <tr>
                              <td>Git</td>
                            </tr>
                            <tr>
                              <td>Docker</td>
                            </tr>
                            <tr>
                              <td>Linux</td>
                            </tr>
                            <tr>
                              <td>GNS3 / Packet tracer</td>
                            </tr>
                            <tr>
                              <td>Wireshack</td>
                            </tr>
                            <tr>
                              <td>pfsense</td> 
                            </tr>
                            <tr>
                              <td>Windows Server</td>
                            </tr>
                          </table>
              </div>
            </div>
        </section>
    )
}