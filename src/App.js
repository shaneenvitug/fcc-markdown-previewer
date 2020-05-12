import React, { useState } from 'react';
import marked from 'marked';

import Editor from './components/Editor';
import Preview from './components/Preview';

const defaultText = `
# Hi
## How are you?
[I'm an inline-style link](https://www.google.com)
Inline \`code\` has \`back-ticks around\` it.
\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
1. First ordered list item
2. Another item
> Blockquotes are very handy in email to emulate reply text.
Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
**bold text**
`;

function App() {
  const [text, setText] = useState(defaultText);

  return (
    <div className="App">
      <Editor setText={setText} text={text} />
      <Preview text={text} />
    </div>
  );
}

export default App;
