import React from 'react';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../styles/Home.css';

export default function Home() {
    return (
        <div className='home'>
            <div className='about-split'>
                <div className='about'>
                    <h2>Hi, I'm Jared.</h2>
                    <div className='prompt'>
                        <p>A recent full-stack coding bootcamp graduate with a passion for learning and creating.</p>
                        <div className='cv-icons'>
                            <a className='download-button' href="JaredNg_FullStackJrDev_2022.pdf" download>
                                <div className='download-cv'>
                                    <FileDownloadIcon className='download-icon' /><p className='download-cv-word'><span className='hidden-mobile'>Download</span> CV</p>
                                </div>
                            </a>
                            <div className='svg-icons'>
                                <IconButton>
                                    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/jarednjk/', '_blank')} />
                                    <GitHubIcon onClick={() => window.open('https://github.com/jarednjk/', '_blank')} />
                                    <EmailIcon onClick={() => window.open('mailto:jarednjk@email.com', '_blank')} />
                                </IconButton>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='image'>
                    <img className='image-size' src={require('../img/about.jpg')} alt='Jared'></img>
                </div>
            </div>


            <div className='skills'>
                <h1>Technical Skills</h1>
                <ol className='list'>
                    <li>
                        <p><span><strong>Languages: </strong>Java, JavaScript</span></p>
                    </li>
                    <li>
                        <p><span><strong>Web: </strong>HTML, CSS, Bootstrap, React-Bootstrap, Axios, HTTP, SPA, JWT</span></p>
                    </li>
                    <li>
                        <p><span><strong>Web Services: </strong>RESTful API, JSON</span></p>
                    </li>
                    <li>
                        <p><span><strong>Frameworks & Libraries: </strong>ReactJS, NodeJS, ExpressJS, Leaflet, NPM, BookshelfJS</span></p>
                    </li>
                    <li>
                        <p><span><strong>Databases: </strong>MySQL, MongoDB, DBeaver</span></p>
                    </li>
                    <li>
                        <p><span><strong>Deployments: </strong>Git, Netlify, Heroku</span></p>
                    </li>
                    <li>
                        <p><span><strong>Tools: </strong>Visual Studio Code, NetBeans, Gitpod, Postman</span></p>
                    </li>
                </ol>
            </div>
        </div>
    )
}