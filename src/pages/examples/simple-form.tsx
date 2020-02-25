import * as React from "react"
import { reduxForm, Field, IReduxFormSubmitEvent, IPropsInjectedForm } from "react-redux-form-lite"
import { FormattedMessage } from "gatsby-plugin-intl"
import Form from "../../components/form"
import TemplateExamplePage from "../../string-examples/template-example-page"

const ExampleComponent = (props) => {
  const { handleSubmit } = props as IPropsInjectedForm

  const onSubmit = ({ values }: IReduxFormSubmitEvent<any>) => {
    alert(JSON.stringify(values, null, "  "))
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email" />
        </div>
      </div>
      {/*<div>*/}
      {/*  <label>Sex</label>*/}
      {/*  <div>*/}
      {/*    <label><Field name="sex" component="input" type="radio" value="male" /> Male</label>*/}
      {/*    <label><Field name="sex" component="input" type="radio" value="female" /> Female</label>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox" />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  )
}

const Example = reduxForm({
  form: "simpleForm",
})(ExampleComponent)

interface IProps {
}

const SimpleForm = React.memo(({}: IProps) => {

  return (
    <TemplateExamplePage
      title={<FormattedMessage id="examples.titles.simpleForm" />}
      formName="simpleForm"
    >
      <Example />
    </TemplateExamplePage>
  )
})

export default SimpleForm

