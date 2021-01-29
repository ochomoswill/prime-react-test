import React, {FunctionComponent, useState} from 'react';
import {Editor} from "primereact/editor";

interface OwnProps {
}

type Props = OwnProps;

const PrimeReactEditor: FunctionComponent<Props> = (props) => {
    const [text1, setText1] = useState('');

    return (
        <React.Fragment>
            <Editor
                style={{height: 'calc(100vh - 220px)'}}
                headerTemplate={<span/>}
                value={text1}
                onTextChange={(e) => {
                    if (e.htmlValue) {
                        console.log("@e.htmlValue ", e.htmlValue);

                        setText1(e.htmlValue);
                    }

                }}
                modules={{
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote'],
                        [{
                            'script': 'sub',
                        }, {
                            'script': 'super',
                        }],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        [{ 'indent': '-1'}, { 'indent': '+1' }],

                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [/*1,*/ 2, 3, 4, 5, 6, false] }],

                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['link', 'image', 'video'],

                        ['clean']
                    ]
                }}
            />
        </React.Fragment>
    );
};

export default PrimeReactEditor;
