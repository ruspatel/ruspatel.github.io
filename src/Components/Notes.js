import React, {useEffect, useState} from 'react';
import {Element} from 'react-scroll';
import {Header} from './CommonComponents';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import readMe from './README.md';
import { useParams, Link } from 'react-router-dom';



const Notes = () => {
    const [file, setFile] = useState({file: null});
    useEffect(() => {
        fetch(readMe).then((response) => response.text()).then((text) => {
            setFile({file: text})
        }) 
    })

    return(
        <div>
        <NotesBox>
            <Element id="notesId">
                    <Header style={{"margin-top": "75px"}}>Notes</Header>
            </Element>
                <h1>Coming Soon ...</h1>
                <h1>
                    <Link to = '/ruspatel.github.io/notes/README.md'>Markdown hello world</Link>
                </h1>
                {/* <ReactMarkdown source={file.file} /> */}
        </NotesBox>

        </div>
    );
}

const NotesBox = styled.div`
    width: 1000px;
    margin: auto;
`;

export default Notes;