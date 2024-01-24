/**
 * Home.jsx
 * Reynaldo Jr Pena
 * 301354757
 * January 24, 2024
 */

import bg from '../src/assets/mypic.png';
import { Link } from 'react-router-dom';
import btnImg from '../src/assets/about.png';
export default function Home(){
    return (
        <section id="home">
            <div className="homeContent">
                <span className="hello">Hello!</span>
                <span className="intro">I am <span className="introName">Reynaldo</span><br />Web Developer</span>
                <p className="introSpeech">I am an aspiring web developer that designs user-friendly websites.</p>
                <Link to="/about"><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Recruit Me</button></Link>    
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}