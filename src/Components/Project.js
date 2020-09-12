import styled from 'styled-components';
import React from 'react';
import androidstudio from '../Images/androidstudio.png';
import ProjectEntry from './ProjectEntry';


const Project = () => {
    const projects = [
        { name: 'Whats the Weather App', tools: 'Android Studio | Java', description: `My first android app. Created to
        query the weather from different cities `, img: androidstudio },
        { name: 'Trivia Web App', tools: 'React | JavaScript', description: ''},

    ]
    return(
        // <ProjectBox>
        //     <ProjectCard>
        //         <Title>Projects</Title>
        //         {projects.map((project) => (
        //             <div>
        //                 {/* <ProjectTitle>{project.name}</ProjectTitle>
        //                 <ProjectTools>{project.tools}</ProjectTools> */}
        //                 <CoopCard>
        //                     <StyledLogo src={project.img}/>
        //                     <Details>
        //                         <CoopTitle>{project.name}</CoopTitle>
        //                         <CoopPosition>{project.tools}</CoopPosition>
        //                         <Description>{project.description}</Description>
        //                     </Details>
        //                 </CoopCard>
        //             </div>
        //         ))}
        //     </ProjectCard>
        // </ProjectBox>


        <ProjectBox>
            <Title>Projects</Title>
                <ProjectCards>
                    <ProjectEntry/>
                    <ProjectEntry/>
                    <br/>
                    <ProjectEntry/>
                    <ProjectEntry/>
                </ProjectCards>
        </ProjectBox>
    );
}

const ProjectBox = styled.div`
    background-color: lightgreen;
    // margin-top: 10px;
    margin: auto;
    width: 1000px;
    // display: flex;
    justify-content: space-around;
    text-align: center;
    // flex-wrap: nowrap;
`;

const ProjectTitle = styled.div`
    font-size: 30px;
`;

const ProjectTools = styled.div`
    font-size: 15px;
`;

const Title = styled.div`
    font-size: 40px;
    color: navy;
    margin: auto;
`;

const ProjectCard = styled.div`
    margin: auto;
    width: 1000px;
`;

const ProjectCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
`;


const CoopCard = styled.div`
    display: flex;
    background-color: pink;
    // margin-top: 10px;
    margin: auto;
    margin-bottom: 20px;
`;

const ExperienceCard = styled.div`
    margin: auto;
    background-color: purple;
    width: 75%;
`;

const CoopTitle = styled.div`
    font-size: 40px;
`;

const StyledLogo = styled.img`
    width: 150px;
    height: 150px;
`;

const CoopPosition = styled.div`
    font-size: 20px;
`;

const Details = styled.div`
    flex-direction: column;
    margin-left: 10px;
`;

const Description = styled.div`
    margin-top: 20px;
    font-size: 20px;
`;
export default Project;