import * as React from "react"
import { reduxForm, Field, FieldArray, IPropsInjectedFieldArray } from "react-redux-form-lite"
import { FormattedMessage } from "gatsby-plugin-intl"
import Form from "../../components/form"
import TemplateExamplePage from "../../string-examples/template-example-page"
import cn from "classnames"
import CloseButton from "../../components/close-button"

const validateIsRequired = (value) => !value ? "Field required." : undefined

let id = 0

const getId = () => id++

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

const Books = (props) => {
  const { fields, keyOfId, fieldArray } = props as IPropsInjectedFieldArray

  return (
    <div className="books">
      <ul>
        {fields.map((friend, i) => (
          <li className="book" key={fieldArray[i][keyOfId]}>
            <CloseButton onClick={() => fields.remove(fieldArray[i][keyOfId])} />
            <Field
              label="Book name"
              validate={validateIsRequired}
              name={`${friend}.firstName`}
              component={CustomField}
            />
            <Field
              label="Publication date"
              validate={validateIsRequired}
              name={`${friend}.secondName`}
              component={CustomField}
            />
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => fields.push({ id: getId() })}>
        Add book
      </button>
    </div>
  )
}

const Authors = (props) => {
  const { fields, keyOfId, fieldArray } = props as IPropsInjectedFieldArray

  return (
    <div className="authors">
      <ul>
        {fields.map((user, i) => (
          <li className="author" key={fieldArray[i][keyOfId]}>
            <CloseButton onClick={() => fields.remove(fieldArray[i][keyOfId])} />
            <Field
              label="First Name"
              validate={validateIsRequired}
              name={`${user}.firstName`}
              component={CustomField}
            />
            <Field
              label="Last Name"
              validate={validateIsRequired}
              name={`${user}.secondName`}
              component={CustomField}
            />
            <FieldArray
              name={`${user}.books`}
              component={Books}
            />
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => fields.push({ id: getId() })}>
        Add author
      </button>
    </div>
  )
}

const FieldArrayExample = (props) => {
  const { handleSubmit } = props

  const onSubmit = ({ values, state }) => {
    if (!state.form.hasErrors && !state.form.hasWarnings) {
      alert(JSON.stringify(values, null, "  "))
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldArray name="authors" component={Authors} />
      <button type="submit">Submit</button>
    </Form>
  )
}


const Example = reduxForm({
  form: "fieldArray",
})(FieldArrayExample)


const SyncValidation = React.memo(() => {

  return (
    <TemplateExamplePage
      title={<FormattedMessage id="examples.titles.fieldArray" />}
      formName="fieldArray"
    >
      <Example />
    </TemplateExamplePage>
  )
})

export default SyncValidation

