import * as React from "react"
import { reduxForm, Field, FormSection } from "react-redux-form-lite"
import { FormattedMessage } from "gatsby-plugin-intl"
import Form from "../../components/form"
import TemplateExamplePage from "../../string-examples/template-example-page"

const UserSection = () => {
  return (
    <>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name" />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name" />
        </div>
      </div>
    </>
  )
}


const ExampleComponent = ({ handleSubmit }) => {

  const onSubmit = ({ values, state }) => {
    if (!state.form.hasErrors && !state.form.hasWarnings) {
      alert(JSON.stringify(values, null, "  "))
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3>Buyer</h3>
      <FormSection name="buyer">
        <UserSection />
      </FormSection>
      <h3>Recipient</h3>
      <FormSection name="recipient">
        <UserSection />
      </FormSection>
      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  )
}

const Example = reduxForm({
  form: "formSection",
})(ExampleComponent)

const FormSectionExample = React.memo(() => {

  return (
    <TemplateExamplePage
      title={<FormattedMessage id="examples.titles.formSection" />}
      formName="formSection"
    >
      <Example />
    </TemplateExamplePage>
  )
})

export default FormSectionExample
