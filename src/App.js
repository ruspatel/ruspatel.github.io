import React from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';


function App() {
  return (
    <MainBox>
      <Navbar/>
      <About/>
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
