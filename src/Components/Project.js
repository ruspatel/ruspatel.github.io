import styled from 'styled-components';
import React from 'react';


const Project = () => {
    const projects = [
        { name: 'name', tools: 'React | Express', description: ''},
        { name: 'name', tools: 'Android Studio | Machine Learning', description: ''},

    ]
    return(
        <ProjectBox>
            <Title>Projects</Title>
            {projects.map((project) => (
                <div>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectTools>{project.tools}</ProjectTools>
                </div>
            ))}
        </ProjectBox>
    );
}

const ProjectBox = styled.div`
    background-color: green;
    // margin-top: 10px;
`;

const ProjectTitle = styled.div`
    font-size: 30px;
`;

const ProjectTools = styled.div`
    font-size: 15px;
`;

const Title = styled.div`
    font-size: 40px;
    color: red;
`;

export default Project;