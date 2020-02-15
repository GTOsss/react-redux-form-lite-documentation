import * as React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs"
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
    <SyntaxHighlighter lenguage="javascript" style={androidstudio}>
      {mapExamples[exampleKey]}
    </SyntaxHighlighter>
  )
})

export default SimpleExample
