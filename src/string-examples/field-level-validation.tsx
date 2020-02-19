export default `
import React from 'react';
import { Field, reduxForm } from 'react-redux-form-lite';
import cn from "classnames"

const validateIsRequired = (value) => !value ? "Field required." : undefined
const validateMinLength = (minLength) => (value) =>
  value.length < minLength ? \`Must be \${minLength} characters or more.\` : undefined

const warnTooYang = (value) => Number.parseInt(value, 10) < 18 ? "Too yang." : undefined
const warnTooSmall = (value) => Number.parseInt(value, 10) < 1 ? "Too small." : undefined
const warnTooLarge = (value) => Number.parseInt(value, 10) > 100 ? "Too large." : undefined


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
      <label>{label}</label>
      <div className="direction-column">
        <input
          {...input}
          className={cn({ "input-error": meta.error, "input-warning": meta.warning })}
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

const ExampleComponent = (props) => {
  const { handleSubmit } = props

  const onSubmit = ({ values, state }) => {
    if (!state.form.hasErrors && !state.form.hasWarnings) {
      alert(JSON.stringify(values, null, "  "))
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field
        label="First Name"
        validate={validateIsRequired}
        name="firstName"
        component={CustomField}
        type="text"
        placeholder="First Name"
      />
      <Field
        label="Last Name"
        validate={[validateIsRequired, validateMinLength(2)]}
        name="lastName"
        component={CustomField}
        type="text"
        placeholder="Last Name"
      />
      <Field
        label="Age"
        validate={validateIsRequired}
        warn={warnTooYang}
        name="age"
        component={CustomField}
        type="text"
        placeholder="Age"
      />
      <Field
        label="Number from br 0 to 100"
        warn={[warnTooSmall, warnTooLarge]}
        name="number"
        component={CustomField}
        type="number"
        placeholder="Number from 0 to 100"
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  )
}

export default reduxForm({
  form: "fieldLevelValidation",
})(ExampleComponent)

`;
