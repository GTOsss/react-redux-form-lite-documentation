import * as React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import simpleForm from "./simple-form"
import syncValidation from "./sync-validation"

const mapExamples = {
  simpleForm,
  syncValidation,
}

export type ExampleKey = keyof typeof mapExamples;

interface IProps {
  exampleKey: ExampleKey;
}

export const SimpleExample = React.memo(({ exampleKey }: IProps) => {

  return (
    <SyntaxHighlighter wrapLines language="jsx" style={darcula}>
      {mapExamples[exampleKey]}
    </SyntaxHighlighter>
  )
})

export default SimpleExample
