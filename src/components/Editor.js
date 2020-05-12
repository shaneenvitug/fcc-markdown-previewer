import React from 'react';

const Editor = ({setText, text}) => {
  return(
    <div className="container">
      <div id="markdown">
        <div>MARKDOWN</div>
        <img src="reset.png" alt="reset icon" title="Reset text" onClick={() => {setText('')}} />
      </div>
      <textarea id="editor" onChange={(event) => setText(event.target.value)} value={text} autoFocus title="Edit me!"></textarea>
    </div>
  );
}

export default Editor;