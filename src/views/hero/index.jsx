import { IoLogoFacebook, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import avatar from '../../assets/img/avatar.jpg';

const Hero = () => {
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
					<div class="dashed" />
					<br />
					<p>A React JS Developer with 
						a passion for creating innovative and user-friendly applications. I do coding 
						for 3 years of experience in the field, working with a variety of programming 
						languages and frameworks. I am proficient in Javascript, and PHP.
					</p>
					<br />
					<div className="button-links">
						<div className="social-wrapper">
							<i><IoLogoFacebook /></i>
							<i><IoLogoGithub /></i>
							<i><IoLogoInstagram  /></i>
							<i><IoLogoLinkedin  /> </i>

						</div>
						<div className="download-btn">
							<button>Download CV</button>
						</div>

					</div>
					
				</div>
			</div>	
		</div>
		);
}


export default Hero;