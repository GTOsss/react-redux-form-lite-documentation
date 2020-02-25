import * as React from "react"
import styled from "styled-components"
import { IReduxFormState, IReduxFormWizard } from "react-redux-form-lite"

const Wrap = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  font-size: 13px;
  margin: 0;
`

interface IObjectElement {
  maxHeight?: string;
}

const ObjectElement = styled.div<IObjectElement>`
  padding: 4px;
  background-color: #eaeaea;
  margin-bottom: 15px;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  max-width: 500px;
  overflow-y: auto;
  max-height: ${({ maxHeight }) => maxHeight ? `${maxHeight}` : "auto"};
`

interface IProps {
  formName: string;
  formState: IReduxFormState<any> | IReduxFormWizard<any> | {};
  wizard: boolean;
}

const JsonExample = React.memo(({
  formState,
  formName,
  wizard = false,
}: IProps) => {

  if (!formState) {
    return null
  }

  const formStateWithWizard = formState as IReduxFormWizard<any>;
  const formStateWithForm = formState as IReduxFormState<any>;

  return (
    <Wrap>
      <Title>Values (state.reduxForm.{formName}.values):</Title>
      <ObjectElement>
        {JSON.stringify(formStateWithForm.values, null, "  ")}
      </ObjectElement>
      {
        wizard ? (
          <>
            <Title>Form (state.reduxForm.{formName}.wizard):</Title>
            <ObjectElement>
              {JSON.stringify(formStateWithWizard.wizard, null, "  ")}
            </ObjectElement>
          </>
        ) : (
          <>
            <Title>Form (state.reduxForm.{formName}.form):</Title>
            <ObjectElement>
              {JSON.stringify(formStateWithForm.form, null, "  ")}
            </ObjectElement>
          </>
        )}
      {
        wizard ? null : (
          <>
            <Title>Meta (state.reduxForm.{formName}.meta):</Title>
            <ObjectElement maxHeight="300px">
              {JSON.stringify(formStateWithForm.meta, null, "  ")}
            </ObjectElement>
          </>
        )
      }
    </Wrap>
  )
})

export default JsonExample
