import * as React from "react"
import styled from "styled-components"
import { IReduxFormState } from "react-redux-form-lite"
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
  wizard?: boolean;
}

const TemplateExamplePage = ({
  children,
  title,
  formName,
  wizard = false,
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
        <JsonExample wizard={wizard} formName={formName} formState={formState} />
      </BodyExample>
      <ExampleByKey exampleKey={formName} />
    </Layout>
  )
}

export default TemplateExamplePage
