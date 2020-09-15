import styled from 'styled-components';
import React, {useState} from 'react';
import Coop from './Coop';
import csfImg from '../Images/csf.png';
import clearbridgemobile from '../Images/clearbridgemobile.png';
import economical from '../Images/economical.jpeg';
import {Header} from './CommonComponents';
import {Element} from 'react-scroll';

const Experience = () => {
    const coops = [
        {companyName: 'Canadian Sheep Federation', position: 'Full Stack Developer', duration: 'July 2020 - Sept 2020', img: csfImg, description: `I worked on a small team of 4
        developers to create a blockchain web application for sheep farmers across Canada. This application aims to digitize the information logging process as well as improve
        disease traceability in sheep. I became familar with all aspects of web developement from creating an Express REST API backend with a MongoDB database to creating a user compassionate
        Frontend with React.` },
        {companyName: 'Clearbridge Mobile', position: 'QA Developer', duration: 'Sept 2019 - Dec 2019', img: clearbridgemobile, description: `I worked in a small team of QA developers with the goal
        of testing apps as they progress through the app development process. I got the opportunity to write test cases as well as automate them with the Appium testing framework. Throughout this
        experience, I worked with product managers, developers, QA and business which gave me the opportunity to learn about all aspects of the app development process from start to finish.`},
        {companyName: 'Economical Insurance', position: 'Security Analyst', duration: 'Jan 2019 - April 2019', img: economical, description: `I was a security analyst with the responibility of
        provisioning and deprovisioning access for employees and brokers across Canada. In addition to that, I was involved in several projects which helped our team gain a greater understanding
        of future process improvements in access provisioning.` },
    ];

    const [windowSize, setWindowSize] = useState(0);

    if (window.innerHeight !== windowSize) {
		setWindowSize(window.innerHeight);
		console.log('the window size is', window.innerHeight);
	}

    return (
        <ExperienceBox>
            <ExperienceCard>
                <Element id='experienceId'>
                    <Header>Experience</Header>
                </Element>
                {coops.map((coop) => (
                    <Coop companyName={coop.companyName} position={coop.position} duration={coop.duration} img={coop.img} description={coop.description}/>
                ))}
            </ExperienceCard>
        </ExperienceBox>
    );
}

const ExperienceBox = styled.div`
    // background-color: pink;
    // margin-top: 10px;
    margin: auto;
    width: 1000px;

`;

const ExperienceCard = styled.div`
    // display: flex;
    // margin: auto;
    // background-color: purple;
    // width: 1000px;
`;

const Title = styled.div`
    font-size: 40px;
`;

export default Experience;