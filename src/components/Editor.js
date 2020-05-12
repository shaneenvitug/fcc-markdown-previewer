import React from 'react';

const Editor = (props) => {
  return(
    <textarea id="editor" onChange={(event) => props.setText(event.target.value)} value={props.text}></textarea>
  );
}

export default Editor;