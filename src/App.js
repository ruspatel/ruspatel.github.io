import React from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import Experience from './Components/Experience';


function App() {
  return (
    <MainBox>
      <Navbar/>
      <About/>
      <Experience/>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 100%;
  // position: relative;
  display: flex;
  flex-direction: column;
`;

export default App;
