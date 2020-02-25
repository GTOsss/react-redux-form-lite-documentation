import * as React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"
import simpleForm from "./simple-form"
import syncValidation from "./sync-validation"
import fieldLevelValidation from "./field-level-validation"
import initialValues from "./initial-values"
import initialValuesWithSet from "./initial-value-with-set"
import fieldArray from "./field-array"
import wizardForm from './wizard-form';
import formSection from './form-section';

const mapExamples = {
  simpleForm,
  syncValidation,
  fieldLevelValidation,
  initialValues,
  initialValuesWithSet,
  fieldArray,
  wizardForm,
  formSection,
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
