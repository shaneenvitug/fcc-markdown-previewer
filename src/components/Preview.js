import React from 'react';
import marked from 'marked';

const Preview = (props) => {
  return(
    <div className="container">
      <div id="prev">PREVIEW</div>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.text, {breaks: true})}}></div>
    </div>
  );
}

export default Preview;