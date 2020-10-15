import React, {useEffect, useState} from 'react';
import {Element} from 'react-scroll';
import {Header} from './CommonComponents';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
// import readMe from './README.md';
import { useParams, Link } from 'react-router-dom';



const Note = () => {
    let params = useParams();
    const [file, setFile] = useState({file: null});

    useEffect(() => {
        const filePath = require(`./${params.noteName}`)
        console.log('the param is ', params.noteName);
        fetch(filePath).then((response) => response.text()).then((text) => {
            setFile({file: text})
        }) 
    },[params])

    return(
        <div>
        <NotesBox>
            <Element id="notesId">
                    <Header style={{"margin-top": "75px"}}>Notes</Header>
            </Element>
                <h1>Coming Soon ...</h1>
                <ReactMarkdown source={file.file} />
        </NotesBox>

        </div>
    );
}

const NotesBox = styled.div`
    width: 1000px;
    margin: auto;
`;

export default Note;