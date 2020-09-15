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
    return (
        <AboutBox>
            <Element id="aboutId">
                <Header style={{"margin-top": "75px"}}>About</Header>
            </Element>
            <AboutText>
                Hi, I'm Rushil! I'm a second year student at the University of Waterloo in Computer Engineering.
                Over the course of my studies at the University of Waterloo, I've gotten the opportunity to work at several companies as an analyst, QA and full stack developer.
                I am always interested in learning more about all aspects of tech from web dev to hardware. When I am not doing that, you can find me watching/playing 🏀.
                Aside from that, check out my projects and experiences below!
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