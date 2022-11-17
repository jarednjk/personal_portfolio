import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

export default function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <a style={{ textDecoration: 'none' }} href={project.link} target='_blank'>
                <div className='repo'>
                    <GitHubIcon /> <h2>Repo Link </h2>
                </div>
            </a>

        </div>
    )
}