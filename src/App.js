import React from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Notes from './Components/Notes';
import Note from './Components/Note';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <MainBox>
      <Router>
        <Route path="/ruspatel.github.io" exact>
          <Navbar/>
          <About/>
          <Project/>
          <Experience/>
          <Notes/>
        </Route>
        <Route path="/ruspatel.github.io/notes/:noteName">
          <Note/>
        </Route>
      </Router>
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
