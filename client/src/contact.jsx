/**
 * contact.jsx
 * Reynaldo Jr Pena
 * 301354757
 * January 24, 2024
 */
import facebook from '../src/assets/facebook.png';
import instagram from '../src/assets/instagram.png';
import github from '../src/assets/github.png';
import linkedin from '../src/assets/linkedin.png';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <>
            <section id="contact">
                <h1 className="contactTitle">Contact Me</h1>
                <p className="contactDesc">If you have any inquiries. Please fill out the form below:</p>
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msgBox" name="message" cols="30" rows="5" placeholder="Your Message"></textarea>
                    <Link to="/">
                        <button type="submit" value='Send' className="submitBtn">Submit</button>
                    </Link>
                    <div className="links">
                        <img src={facebook} alt="Facebook" className="link" />
                        <img src={instagram} alt="Instagram" className="link" />
                        <img src={github} alt="Github" className="link" />
                        <img src={linkedin} alt="Linkedin" className="link" />
                    </div>
                </form>
            </section>
        </>
    );
}
