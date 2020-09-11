import styled from 'styled-components';
import React from 'react';


const About = () => {

    return(
        <AboutBox>
            <AboutText>
                <h1>Hi, my name is Rushil. I am a software engineer.
                Hi, my name is Rushil. I am a software engineer.
                Hi, my name is Rushil. I am a software engineer.
                </h1>
            </AboutText>
        </AboutBox>
    );
}

const AboutBox = styled.div`
    background-color: green;
    // margin-top: 10px;
`;

const AboutText = styled.div`
    width: 50%;
`;

export default About;