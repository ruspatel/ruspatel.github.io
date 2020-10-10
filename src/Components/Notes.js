import React from 'react';
import {Element} from 'react-scroll';
import {Header} from './CommonComponents';
import styled from 'styled-components';



const Notes = () => {
    return(
        <div>
        <NotesBox>
            <Element id="notesId">
                    <Header style={{"margin-top": "75px"}}>Notes</Header>
            </Element>
                <h1>Coming Soon ...</h1>
        </NotesBox>

        </div>
    );
}

const NotesBox = styled.div`
    width: 1000px;
    margin: auto;
`;

export default Notes;