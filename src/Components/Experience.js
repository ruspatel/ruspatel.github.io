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
        {companyName: 'Canadian Sheep Federation', position: 'Full Stack Developer', duration: 'July 2020 - Sept 2020', img: csfImg, description: 'hello world' },
        {companyName: 'Clearbridge Mobile', position: 'QA Developer', duration: 'July 2020 - Sept 2020', img: clearbridgemobile, description: 'hello world' },
        {companyName: 'Economical Insurance', position: 'Security Analyst', duration: 'July 2020 - Sept 2020', img: economical, description: 'hello world' },
    ];

    const [windowSize, setWindowSize] = useState(0);

    if (window.innerHeight !== windowSize) {
		setWindowSize(window.innerHeight);
		console.log('the window size is', window.innerHeight);
	}

    return(
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