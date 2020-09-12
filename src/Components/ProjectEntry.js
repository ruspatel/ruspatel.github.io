import React from 'react';
import styled from 'styled-components';
import androidstudio from '../Images/androidstudio.png';


const ProjectEntry = () => {


    return(
        <div>
            <ProjectEntryCard>
                <ProjectTitle>hello world</ProjectTitle>
                <ProjectTools>React | Express | JavaScript</ProjectTools>
                <StyledLogo src={androidstudio}/>

                <ProjectDescription>Hello World</ProjectDescription>

            </ProjectEntryCard>
        </div>
    );
}

const ProjectEntryTitle = styled.div`
    font-size: 30px;
`;
const ProjectEntryCard = styled.div`
    width: 400px;
    background-color: red;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

const ProjectTitle = styled.div`
    font-size: 40px;
    margin: auto;

`;

const StyledLogo = styled.img`
    width: 150px;
    height: 150px;
    margin: auto;
`;

const ProjectTools = styled.div`
    font-size: 20px;
`;

const ProjectDescription = styled.div`
    font-size: 25px;
`;

export default ProjectEntry;