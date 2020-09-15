import React from 'react';
import styled from 'styled-components';


const ProjectEntry = ({name, tools, img, description, githubLink}) => {


    return (
        <div>
            <ProjectEntryCard>
                <ProjectTitle>{name}</ProjectTitle>
                <ProjectTools>{tools}</ProjectTools>
                <StyledLogo src={img}/>
                <ProjectDescription>{description}</ProjectDescription>
                <StyledButton onClick={() => window.open(githubLink)} >
                    Github
                </StyledButton>
            </ProjectEntryCard>
        </div>
    );
}

const ProjectEntryTitle = styled.div`
    font-size: 30px;
`;
const ProjectEntryCard = styled.div`
    width: 400px;
    // background-color: #4682B4;
    background-color: lightgrey;
    border-radius: 20px;

    margin-right: 40px;
    margin-left: 40px;
    margin-bottom: 30px;
    margin-top: 30px;

    text-align: center;
    height: 375px;
    display: flex;
    flex-direction: column;
`;

const ProjectTitle = styled.div`
    font-size: 35px;
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
    font-size: 20px;
`;

const StyledButton = styled.button`
    background-color: blue;
    width: 100px;
    height: 35px;
    margin: auto;
    color: white;
    background-color: rgb(51, 106, 124);

    border-radius: 10px;
    cursor: pointer;

	&:hover {
		border-color: white;
		border: 1px solid;
	}
`;

export default ProjectEntry;