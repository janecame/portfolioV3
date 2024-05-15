import { IoLogoFacebook, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import avatar from '../../assets/img/avatar.jpg';
import CV  from '../../assets/files/ResumeRodrigoCuelloProgramming.pdf';



const Hero = () => {

	

	const handleIconClick = (link) => {
		window.open(link, '_blank');
	};

	return(
		<div className="hero">
			<div className="box">
				<div className="content-avatar">
					<div className="avatar">
						<img src={avatar} alt="avatar"/>
					</div>
				</div>
				<div className="content">
					<h1>Rodrigo Cuello</h1>
					{/* <div class="dashed" /> */}
					<br />
					<p>
						I'm a <strong>self-taught React.js developer </strong> with intermediate programming skills, 
						eager to join the industry. I specialize in front-end development with React.js 
						and am keen to grow in both front-end and backend. Excited to contribute and learn in 
						a professional setting.
					</p>
					<br />
					<div className="button-links">
						<div className="social-wrapper">
							<i onClick={() => handleIconClick("https://www.facebook.com/jane.came/")}><IoLogoFacebook /></i>
							<i onClick={() => handleIconClick("https://github.com/janecame")}><IoLogoGithub /></i>
							<i onClick={() => handleIconClick("https://www.instagram.com")}><IoLogoInstagram  /></i>
							<i onClick={() => handleIconClick("https://www.linkedin.com/in/rodrigo-cuello-cue03/")}><IoLogoLinkedin  /></i>
						</div>
						<div className="download-btn">
							<a href={CV} download>
								Download CV	
							</a>
						</div>

					</div>
					
				</div>
			</div>	
		</div>
		);
}


export default Hero;