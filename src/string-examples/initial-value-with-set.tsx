export default `
import * as React from "react"
import { reduxForm, Field, IReduxFormSubmitEvent } from "react-redux-form-lite"

const defaultUser = {
  firstName: "Timofey",
  lastName: "Goncharov",
  email: "test@mail.ru",
}

const ExampleComponent = (props) => {
  const { handleSubmit, formActions: { resetForm, setInitialValues } } = props

  const onSubmit = ({ values }) => {
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
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male" /> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female" /> Female</label>
        </div>
      </div>
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
      <div className="row">
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => setInitialValues("initialValuesWithSet", defaultUser)}
        >
          Load user
        </button>
        <button
          id="resetForm"
          type="button"
          onClick={() => resetForm("initialValuesWithSet")}
        >
          Reset
        </button>
      </div>
    </Form>
  )
}

export default reduxForm({
  form: "initialValuesWithSet",
})(ExampleComponent)

`
