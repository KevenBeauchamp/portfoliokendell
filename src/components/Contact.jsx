import { useRef, useState } from "react";
import "../contact.css";
import emailjs from "@emailjs/browser";
export default function Contact(params) {
     const form = useRef();
    const YOUR_PUBLIC_KEY = "fiJMSN5TQPH17M_gb";
    const YOUR_SERVICE_ID = "service_2xl96cl";
    const YOUR_TEMPLATE_ID = "template_bi9quuo";
    const submitDetail = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
      const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
        const handleChange = (e) => {
            setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            });
        };
     const handleSubmitEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log("Email sent successfully:", result.text);
                alert("Message sent successfully");
                 // Reset form
                setFormData({
                    fullName: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                e.target.reset();
                console.log("Email sent successfully:", formData);
            })
            .catch((error) => {
                console.log("Error sending email:", error);
            });
    };
    return(
        <>
            <section id="contact">
                <h1 className="title">Contact Me</h1>
                <div className="contact-container">
                    <h1 className="contact-title">Let's work together</h1>
                    <p className="contact-subtitle">I create and develop elegantly straightforward solutions, and I am passionate about my work.</p>
                    <form className="contact-form"  ref={form} onSubmit={handleSubmitEmail} >
                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="">Full Name </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={FormData.fullName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    required 
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Email Adresse </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={FormData.email}
                                    onChange={handleChange}
                                    placeholder="John@gmail.com"
                                    required 
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={FormData.subject}
                                onChange={handleChange}
                                placeholder="Job for you"
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Message</label>
                            <textarea
                                name="message"
                                value={FormData.message}
                                onChange={handleChange}
                                placeholder="write a brief message"
                                required
                            />
                        </div>
                        <div className="button-wrapper">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}