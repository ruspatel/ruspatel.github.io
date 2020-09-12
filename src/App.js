import React from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import Experience from './Components/Experience';
import Project from './Components/Project';


function App() {
  return (
    <MainBox>
      <Navbar/>
      <About/>
      <Project/>
      <Experience/>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 100%;
  // position: relative;
  display: flex;
  flex-direction: column;
  // background-color: lightcyan;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

`;

export default App;
