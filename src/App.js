import React, { useState } from 'react';

import Editor from './components/Editor';
import Preview from './components/Preview';
import Design from './components/Design';

const defaultText = `# hello 
## This is a Markdown editor

> Markdown is a lightweight markup language, allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

see [Wikipedia](https://en.wikipedia.org/wiki/Markdown)

- Type some Markdown on the left
- See HTML on the right
- Magic

You can also:

1. *Emphasise* and make text **bold**
1. Add Inline \`code\` which has \`back-ticks around\` it.
1. Blocks of code are either fenced by lines with three back-ticks \`\`\`

\`\`\`
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

thanks for dropping by! stay safe ![heart emoji](heart-emoji.png)
`;

function App() {
  const [text, setText] = useState(defaultText);

  return (
    <div className="App">
      <Design />
      <div id="main">
        <Editor setText={setText} text={text} />
        <Preview text={text} />
      </div>
    </div>
  );
}

export default App;
