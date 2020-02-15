import * as React from "react"
import styled from "styled-components"
import { reduxForm, Field, IReduxFormSubmitEvent, IReduxFormState } from "react-redux-form-lite"
import { useSelector } from "react-redux"
import Layout from "../components/layout"
import BodyExample from "../components/body-example"
import JsonExample from "../components/json-example"
import ExampleByKey, { ExampleKey } from "./index"

const LeftWrap = styled.div`
  width: 100%;
`

interface IProps {
  children: React.ReactNode;
  title: React.ReactNode;
  formName: ExampleKey;
}

const TemplateExamplePage = ({
  children,
  title,
  formName,
}: IProps) => {

  // @ts-ignore
  const formState = useSelector(state => state.reduxForm[formName] as IReduxFormState<any>)

  return (
    <Layout navPanelKey="examples">
      <BodyExample>
        <LeftWrap>
          <h1>{title}</h1>
          {children}
        </LeftWrap>
        <JsonExample formName={formName} formState={formState} />
      </BodyExample>
      <ExampleByKey exampleKey={formName} />
    </Layout>
  )
}

export default TemplateExamplePage
