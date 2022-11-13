import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <EmailIcon />
                <GitHubIcon />
                <LinkedInIcon />
            </div>
            <p>&copy; 2022 jarednjk.netlify.app</p>
        </div>
    )
}