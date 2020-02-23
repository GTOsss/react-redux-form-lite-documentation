import * as React from "react"
import { reduxForm, Field } from "react-redux-form-lite"
import { FormattedMessage } from "gatsby-plugin-intl"
import Form from "../../components/form"
import TemplateExamplePage from "../../string-examples/template-example-page"
import cn from "classnames"

const validationIsRequired = (value) => !value ? "Field required." : undefined
const validationMinLength = (value) =>
  value && (value.length < 2) ? "The minimum length of the value must be 2." : undefined

const CustomField = ({
  meta,
  input,
  placeholder,
  label,
  type,
}) => {
  const showMessage = Boolean(meta.error || meta.warning)
  return (
    <div>
      <label>{label || placeholder}</label>
      <div className="direction-column">
        <input
          {...input}
          className={cn({
            "input-error": showMessage && meta.error,
            "input-warning": showMessage && meta.warning,
          })}
          placeholder={placeholder}
          type={type}
        />
        {showMessage && (
          <div className={cn({ "message-error": meta.error, "message-warning": meta.warning })}>
            {meta.error || meta.warning}
          </div>
        )}
      </div>
    </div>
  )
}

////////////////////
// Step 1

const Step1Component = (props) => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        validate={validationIsRequired}
        name="firstName"
        component={CustomField}
        type="text"
        placeholder="First Name"
      />
      <Field
        warn={validationMinLength}
        validate={validationIsRequired}
        name="lastName"
        component={CustomField}
        type="text"
        placeholder="Last Name"
      />
      <div className="row">
        <button type="button">Previous</button>
        <button type="submit">Next</button>
      </div>
    </Form>
  )
}

const Step1 = reduxForm({
  form: "step1",
  wizard: "wizardForm",
  destroyOnUnmount: false,
})(Step1Component)

////////////////////
// Step 2

const Step2Component = (props) => {
  const { handleSubmit, prevPage } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        validate={validationIsRequired}
        name="phone"
        component={CustomField}
        type="text"
        placeholder="Phone"
      />
      <Field
        warn={validationMinLength}
        validate={validationIsRequired}
        name="email"
        component={CustomField}
        type="text"
        placeholder="Email"
      />
      <div className="row">
        <button type="button" onClick={prevPage}>Previous</button>
        <button type="submit">Next</button>
      </div>
    </Form>
  )
}

const Step2 = reduxForm({
  form: "step2",
  wizard: "wizardForm",
  destroyOnUnmount: false,
})(Step2Component)

////////////////////
// Step 3

const Step3Component = (props) => {
  const { handleSubmit, prevPage } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        validate={validationIsRequired}
        name="dob"
        component={CustomField}
        type="text"
        placeholder="Date of birthday"
      />
      <Field
        warn={validationMinLength}
        validate={validationIsRequired}
        name="hobby"
        component={CustomField}
        type="text"
        placeholder="Hobby"
      />
      <div className="row">
        <button type="button" onClick={prevPage}>Previous</button>
        <button type="submit">Submit</button>
      </div>
    </Form>
  )
}

const Step3 = reduxForm({
  form: "step3",
  wizard: "wizardForm",
  destroyOnUnmount: false,
})(Step3Component)

////////////////////
// Container

const WizardFieldLevelValidation = () => {
  const [page, setPage] = React.useState(1)

  const nextPage = ({ state: formState }) => {
    if (!formState.form.hasErrors && !formState.form.hasWarnings) {
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    setPage(page - 1)
  }

  const onSubmit = ({ wizard: { values, wizard } }) => {
    if (!wizard.hasErrors && !wizard.hasWarnings) {
      alert(JSON.stringify(values, null, "  "))
    }
  }

  const formsMap = {
    1: <Step1 onSubmit={nextPage} />,
    2: <Step2 onSubmit={nextPage} prevPage={prevPage} />,
    3: <Step3 onSubmit={onSubmit} prevPage={prevPage} />,
  }

  return (
    <div>
      <h2>Step {page}</h2>
      {formsMap[page]}
    </div>
  )
}

const Wizard = React.memo(() => {

  return (
    <TemplateExamplePage
      title={<FormattedMessage id="examples.titles.wizardForm" />}
      formName="wizardForm"
      wizard
    >
      <WizardFieldLevelValidation />
    </TemplateExamplePage>
  )
})

export default Wizard
