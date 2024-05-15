import React from 'react';

import { projectsInfo } from './ProjectsInfo.jsx';



const Projects = () => {

	

	return (
		<div className="projects">
			<div className="title-page">
				<h1>Projects</h1>
			</div>
			
			<div className="wrapper">
				{projectsInfo.map((project, index) => (
					<div className="box" key={index}>
						<h2>{project.title}</h2> 
						<p>{project.description}</p>
						<div className="logos">
							{project.logos.map((logo, logoIndex) => (
								<i key={logoIndex}>{logo}</i>
							))}
						</div>
						<div className="link">
							<a href={project.link}>{project.link}</a>
							{/* project.links.map((link, linkIndex) => (
								<a key={linkIndex} href={link}>{link}</a>
							)) */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
