import * as React from "react"
import { MapMessages, Field, reduxForm, IFieldMeta, IReduxFormSubmitEvent } from "react-redux-form-lite"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import cn from "classnames"
import TemplateExamplePage from "../../string-examples/template-example-page"
import Form from "../../components/form"

const validationIsRequired = (value) => !value ? "Field required." : undefined
const validationMinLength = (minLength) => (value) =>
  value && (value.length < minLength) ? `The minimum length of the value must be ${minLength}.` : undefined

const validate = (values) => {
  const errors: MapMessages<any> = {}

  errors.firstName = validationIsRequired(values.firstName)
  errors.lastName = validationIsRequired(values.lastName)

  return errors
}

const warn = (values) => {
  const warnings: MapMessages<any> = {}

  warnings.firstName = validationMinLength(2)(values.firstName)
  warnings.lastName = validationMinLength(2)(values.lastName)

  return warnings
}

interface ICustomFieldProps {
  meta: IFieldMeta,
  input: any,
  placeholder: string
}

const CustomField = ({
  meta,
  input,
  placeholder,
}: ICustomFieldProps) => {
  const showMessage = Boolean(meta.error || meta.warning)

  return (
    <div className="custom-field">
      <input
        {...input}
        className={cn({"input-error": meta.error, "input-warning": meta.warning}) }
        placeholder={placeholder}
      />
      {showMessage && (
        <div className={cn({"message-error": meta.error, "message-warning": meta.warning})}>
          {meta.error || meta.warning}
        </div>
      )}
    </div>
  )
}

const ExampleComponent = (props) => {
  const { handleSubmit } = props

  const onSubmit = ({ values, state }) => {
    if (!state.form.hasErrors && !state.form.hasWarnings) {
      alert(JSON.stringify(values, null, "  "))
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <Field name="firstName" component={CustomField} type="text" placeholder="First Name" />
      </div>
      <div>
        <label>Last Name</label>
        <Field name="lastName" component={CustomField} type="text" placeholder="Last Name" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  )
}

const Example = reduxForm({
  form: "syncValidation",
  validate,
  warn,
})(ExampleComponent)

interface IProps {
}

const SyncValidation = React.memo(({}: IProps) => {

  return (
    <TemplateExamplePage
      title={<FormattedMessage id="examples.titles.syncValidation" />}
      formName="syncValidation"
    >
      <Example />
    </TemplateExamplePage>
  )
})

export default SyncValidation
