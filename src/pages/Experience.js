import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export default function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='May 2022 - Sep 2022'
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Trent Global College
                    </h3>
                    <p>Diploma in Web Application Development</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='Feb 2021 - Oct 2021'
                    iconStyle={{ background: '#e9d35b', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        FUJIFILM Business Innovation Singapore
                    </h3>
                    <p>Commercial Associate (Strategic Business & Marketing)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='Jul 2019 - Dec 2020'
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        RMIT University, Singapore Institute of Management
                    </h3>
                    <p>Bachelor of Business, Economics and Finance</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}