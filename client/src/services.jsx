/**
 * services.jsx
 * Reynaldo Jr Pena
 * 301354757
 * January 24, 2024
 */
import programming from '../src/assets/programming.png';
import webapp from '../src/assets/webapp.png';
import database from '../src/assets/database.png'
import design from '../src/assets/design.png';
import video from '../src/assets/video.png';



export default function Services() {
    return (
      <>
	  <section id="services">
		<span className="servicesTitle">Services I Offer</span>
		<div className="servicesList">
			<div className="servicesItem">
				<img src={programming} alt="" className='servicesImg'/>
				<div className="serviceItemText">
					<h2>Programming</h2>
					<p>I have learned programming languages like: </p>
						<li>Java</li>
						<li>C#</li>
						<li>C++</li>
						<li>Android Studio</li>
				</div>
			</div>
			<div className="servicesItem">
				<img src={webapp} alt="" className='servicesImg'/>
				<div className="serviceItemText">
					<h2>Web Development</h2>
					<p>I have learned Web Development tools using: </p>
						<li>HTML</li>
						<li>CSS</li>
						<li>Javascript</li>
						<li>REACT</li>
						<li>Angular</li>
						<li>Spring Boot</li>
				</div>
			</div>
			<div className="servicesItem">
				<img src={database} alt="" className='servicesImg'/>
				<div className="serviceItemText">
					<h2>Database Programming</h2>
					<p>I have learned Database Management using: </p>
						<li>MySQL</li>
						<li>PL/SQL</li>
						<li>MongoDB</li>
				</div>
			</div>
			<div className="servicesItem">
				<img src={design} alt="" className='servicesImg'/>
				<div className="serviceItemText">
					<h2>Design</h2>
					<p>I have experience in doing UI/UX and graphic designing using: </p>
						<li>Photoshop</li>
						<li>Figma</li>
						<li>Canva</li>
						<li>Invision</li>
						<li>LucidChart</li>
				</div>
			</div>
			
			<div className="servicesItem">
				<img src={video} alt="" className='servicesImg'/>
				<div className="serviceItemText">
					<h2>Video Editing</h2>
					<p>I have experience in Video Editing using: </p>
						<li>Adobe Premiere</li>
						<li>Capcut</li>
						<li>Sony Vegas</li>
				</div>
			</div>
		</div>
	  </section>
      </>
    );
  }
