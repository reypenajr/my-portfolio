/**
 * project.jsx
 * Reynaldo Jr Pena
 * 301354757
 * January 24, 2024
 */
import inkpanda from '../src/assets/inkpanda.png';
import gabrillo from '../src/assets/gabrillo.png';
import coffeeshop from '../src/assets/coffeeshop.png';



export default function Project() {
        return (
          <>
          <section id="project">
            <span className="sectionTitle">My Projects</span>
            <span className="description">When I first started studying about IT, I gained a lot of knowledge in using 
            different kinds of software tools such as: IDEs, Graphic Design Tools, Productivity Tools, etc. This helped me 
            hone my skills and use it in my future projects. As a graduate of BSIT and currently taking up Software Engineering 
            Tehcnology, there are a lot of projects that I have participated on. Listed below are some of the projects that I have worked on since 2021.</span>
            <div className="projectList">
              <div className="projectItem">
                <img src={inkpanda} alt="inkpanda" className="projectImgInkPanda" />
                <div className="projectItemText">
                  <h2>InkPanda Printing Service</h2>
                  <p>InkPanda is a system created by our group for school project but did not reach deployment phase. We created the design of the system and its backend for our database course.
                    My roles:
                    <li>UI/UX Designer</li>
                    <li>Business Analyst</li>
                    <li>BackEnd Programmer</li>
                  </p>
                </div>
              </div>
              <div className="projectItem">
                <img src={gabrillo} alt="gabrillo" className="projectImg" />
                <div className="projectItemText">
                  <h2>Electronic Dental Record and Appointment System for Gabrillo Dental Clinic</h2>
                  <p>This Electronic Dental Record and Appointment System was our capstone project last 2022. We created a web application for a dental clinic using Laravel.
                    My roles:
                    <li>FrontEnd Developer</li>
                    <li>Documenter</li>
                    <li>UI/UX Designer</li>
                  </p>
                </div>
              </div>
              <div className="projectItem">
                <img src={coffeeshop} alt="grocery" className="projectImg" />
                <div className="projectItemText">
                  <h2>Coffee Shop GUI in C#</h2>
                  <p>For our Programming 2 course, we created a GUI application using C# in .NET framework. This application creates, edits, deletes, and saves customer and order information.
                  </p>
                </div>
              </div>
            </div>
          </section>
            
          </>
        );
      }
    