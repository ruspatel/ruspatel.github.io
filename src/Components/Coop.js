import styled from 'styled-components';
import React from 'react';
import csfImg from '../Images/csf.png';


const Coop = ({companyName, position, duration, img, description}) => {

    return(
        <CoopCard>
            <StyledLogo src={img}/>
            <Details>
                <CoopTitle>{companyName}</CoopTitle>
                <CoopPosition>{position}</CoopPosition>
                <CoopPosition>{duration}</CoopPosition>
                <Description>{description}</Description>
            </Details>
        </CoopCard>
    );
}

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

export default Coop;