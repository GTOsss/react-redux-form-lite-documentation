import * as React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter"
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs"

const simpleFormText = `


`

interface IProps {
}

const SimpleExample = React.memo(({}: IProps) => {

  return (
    <SyntaxHighlighter lenguage="javascript" style={androidstudio}>
      {simpleFormText}
    </SyntaxHighlighter>
  );
});

export default SimpleExample;

