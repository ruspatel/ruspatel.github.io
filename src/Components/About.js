import styled from 'styled-components';
import React, {useState} from 'react';
import {Header} from './CommonComponents';
import {Element} from 'react-scroll';


const About = () => {
    const [windowSize, setWindowSize] = useState(0);

    if (window.innerHeight !== windowSize) {
		setWindowSize(window.innerHeight);
		console.log('the window size is', window.innerHeight);
	}
    return(
        // <AboutBox style={{"height": `${windowSize}px`}}>
        <AboutBox>
            <Element id="aboutId">
                <Header style={{"margin-top": "75px"}}>About</Header>
            </Element>
            <AboutText>
                Hi, I'm Rushil! 👋 I'm a second year student at the University of Waterloo in Computer Engineering. 
                I am always looking to learn more about tech. I've had several internships and also worked on many projects. Check them out below!
            </AboutText>
        </AboutBox>
    );
}

const AboutBox = styled.div`
    // background-color: green;
    // display: flex;
    width: 1000px;
    margin: auto;
    align-items: center;
    // justify-content: center;
    // height: 969px;
    padding: 10px;

`;

const AboutText = styled.div`
    // margin: auto;
    font-size: 30px;
    line-height: 1.7;

`;

export default About;