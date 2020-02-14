import * as React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter"
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs"
import simpleForm from './simple-form';

const mapExamples = {
  simpleForm,
}

type ExampleKey = keyof typeof mapExamples;

interface IProps {
  exampleKey: ExampleKey;
}

const SimpleExample = React.memo(({}: IProps) => {

  return (
    <SyntaxHighlighter lenguage="javascript" style={androidstudio}>
      {mapExamples}
    </SyntaxHighlighter>
  );
});

export default SimpleExample;

const objectMap = {
  field1: '',
  field2: '',
};

type keysOfObjectMap = 'field1' | 'field2';
