import React from 'react';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <IconButton>
                    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/jarednjk/', '_blank')} />
                    <GitHubIcon onClick={() => window.open('https://github.com/jarednjk/', '_blank')} />
                    <EmailIcon onClick={() => window.open('mailto:jarednjk@email.com', '_blank')} />
                </IconButton>
            </div>
            <p>&copy; 2022 jarednjk.netlify.app</p>
        </div>
    )
}