import styled from 'styled-components';
import React from 'react';


const Navbar = () => {

    return(
        <div>
            <StyledNavBar>
                <NavLink>About</NavLink>
                <NavLink>Experience</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink>Extra</NavLink>
            </StyledNavBar>
        </div>
    );
}

const StyledNavBar = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    margin-top: 0px;
    background-color: cyan;
    // position:fixed;
    width: 100%;
`;

const NavLink = styled.div`
    margin-right: 10px;
    margin-left: 10px;
    font-size: 30px;
`;

export default Navbar;