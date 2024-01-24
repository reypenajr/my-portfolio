/**
 * about.jsx
 * Reynaldo Jr Pena
 * 301354757
 * January 24, 2024
 */
import bg from '../src/assets/mypic.png';
import { Link } from 'react-router-dom';
import resume from '../src/assets/myResume.pdf';
import newTab from '../src/assets/newTab.png';
export default function About() {
      return (
        <>
        <section id="about">
          <div className="aboutContent">
              <p className="aboutName">REYNALDO JR PENA</p>
              <p className="aboutMe">I am from the Philippines. I am a graduate of Bachelor of Science in Information Technology in Saint Louis University and currently studying Software Engineering Technology in Centennial College.</p>
              <button className="resumeBtn" onClick={() => window.open(resume, '_blank')}>
                View My Resume 
                <img src={newTab} alt="newTab" className="newTab"/>
              </button>
            <img src={bg} alt="Profile" className="aboutBg" />
          </div>
        </section>
        </>
      );
    }    