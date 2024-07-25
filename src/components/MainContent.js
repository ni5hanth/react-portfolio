import React from "react";
import profilePic from '../pictures/profile-pic.png';
import project1Pic from '../pictures/project-1.png';
import project2Pic from '../pictures/project-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAward, faEnvelope, faUserGraduate, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const MainContent = () => {
    const openPDF = () => {
        window.open('https://drive.google.com/uc?export=download&id=FILE_ID', '_blank');
    };

    const scrollToAbout = () => {
        const AboutSection = document.getElementById('About');
        if (AboutSection) {
            AboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToExperience = () => {
        const experienceSection = document.getElementById('Experience');
        if (experienceSection) {
            experienceSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const ExperienceItem = ({ title, level }) => (
        <article>
            <div>
                <h3>{title}</h3>
                <p>{level}</p>
            </div>
        </article>
    );

    const scrollToProjects = () => {
        const ProjectsSection = document.getElementById('Projects');
        if (ProjectsSection) {
            ProjectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const ProjectItem = ({ imgSrc, title }) => (
        <div className="details-container color-container">
            <div className="article-container">
                <img src={imgSrc} alt={title} className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">{title}</h2>
            <div className="btn-container">
                <button className="button-1" onClick={() => window.location.href='https://github.com/'}>
                    Github
                </button>
            </div>
        </div>
    );

    const scrollToContact = () => {
        const ContactSection = document.getElementById('Contact');
        if (ContactSection) {
            ContactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="profile-pic-container">
                <div className="profile-pic">
                    <img src={profilePic} alt="Nishanth B M" />
                </div>
                <div className="profile-text">
                    <p className="profile-text-2">Hello I'm</p>
                    <h1 className="profile-text-3">Nishanth B M</h1>
                    <p className="profile-text-4">Web Developer</p>
                    <div className="button-container">
                        <button className="button-1" onClick={openPDF}>Download CV</button>
                        <a href="#Contact" className="button-2" onClick={() => window.location.href='./#contact'}>Contact Me</a>
                    </div>
                    <div className="socials-container">
                        <a href="https://github.com/ni5hanth" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                        </a>
                    </div>
                </div>
                <FontAwesomeIcon icon={faAnglesDown} className="arrow" onClick={scrollToAbout} />
            </section>

            <section id="About">
                <p className="text_p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
                <div className="details-container">
                    <FontAwesomeIcon icon={faAward} className="award-icon" />
                    <h3>Experience</h3>
                    <p>3 months <br />Frontend Development Intern</p>
                    <h4>Zieers Systems pvt</h4>
                    <p>Contributed to the development of Quant Guru, an educational website, during my internship at Zieers Systems.
                    Utilized React to build and enhance the frontend user interface, ensuring a seamless user experience.
                    Collaborated on the backend using Node.js to implement server-side logic and APIs.
                    Employed MongoDB for efficient data storage and management.</p>
                </div>
                <div className="about-containers">
                    <div className="details-container">
                        <FontAwesomeIcon icon={faUserGraduate} className="graduate-icon" /> 
                        <h3>Education</h3>
                        <p>B.C.A -Bachelors Degree <br />M.C.A -Masters Degree</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faAnglesDown} className="arrow1" onClick={scrollToExperience} />
            </section>

            <section id="Experience">
                <p className="text_p1">Explore My</p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <h2 className="experience-sub-title">Frontend Development and Backend Development</h2>
                            <div className="article-container">
                                <ExperienceItem title="HTML" level="Experienced" />
                                <ExperienceItem title="CSS" level="Experienced" />
                                <ExperienceItem title="React" level="Intermediate" />
                                <ExperienceItem title="JavaScript" level="Intermediate" />
                                <ExperienceItem title="Java" level="Basic" />
                                <ExperienceItem title="C++" level="Intermediate" />
                                <ExperienceItem title="Node JS" level="Basic" />
                                <ExperienceItem title="Python" level="Basic" />
                            </div>
                        </div>
                        <div className="details-container">
                            <h2 className="experience-sub-title">Skills</h2>
                            <div className="article-container">
                                <ExperienceItem title="GitHub" />
                                <ExperienceItem title="Figma" />
                                <ExperienceItem title="Bootstrap" />
                                <ExperienceItem title="ChatGPT" />
                            </div>
                        </div>
                    </div>
                </div>
                <FontAwesomeIcon icon={faAnglesDown} className="arrow2" onClick={scrollToProjects} />
            </section>

            <section id="Projects">
                <p className="text_p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <ProjectItem imgSrc={project1Pic} title="Quant Guru" />
                        <ProjectItem imgSrc={project2Pic} title="Youtube Summerazier" />
                    </div>
                </div>
                <FontAwesomeIcon icon={faAnglesDown} className="arrow3" onClick={scrollToContact} />
            </section>

            <section id="Contact">
                <p className="text_p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                        <FontAwesomeIcon icon={faEnvelope} className="icon contact-icon email-icon" />
                        <p><a href="mailto:nishanthnishu049@gmail.com">nishanthnishu049@gmail.com</a></p>
                    </div>
                    <div className="contact-info-container">
                        <FontAwesomeIcon icon={faLinkedin} className="icon contact-icon" />
                        <p><a href="https://www.linkedin.com/in/nishanth-b-m-21368425a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                </div>
            </section>

            <nav>
                <div className="nav-bar1">
                    <ul className="nav-links">
                        <li><a href="#About">About</a></li>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                    <p>Copyright &#169; 2024 Nishanth B M. All Rights Reserved.</p>
                </div>
            </nav>
        </>
    );
};

export default MainContent;