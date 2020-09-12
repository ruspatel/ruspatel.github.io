import styled from 'styled-components';
import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {

    function scrollTo(id) {
        scroller.scrollTo(id,{
            duration: 1500,
            delay: 10,
        //   smooth: 'easeInOutQuart'
            smooth: true
        },
        
        )
    }

    return(
        <div>
            <StyledNavBar>
                <NavLink onClick={() => scrollTo('aboutId')}>About</NavLink>
                <NavLink onClick={() => scrollTo('experienceId')}>Experience</NavLink>
                <NavLink onClick={() => scrollTo('projectId')}>Projects</NavLink>
            </StyledNavBar>
        </div>
    );
}

const StyledNavBar = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    margin-top: 0px;
    position:fixed;
    width: 100%;
    background-color: rgb(51, 106, 124);

`;

const NavLink = styled.div`
    margin-right: 10px;
    margin-left: 10px;
    font-size: 30px;
    color: white;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;

export default Navbar;