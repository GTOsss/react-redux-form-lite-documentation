import * as React from 'react';
import styled from 'styled-components';
import { reduxForm, Field, IReduxFormSubmitEvent, IReduxFormState } from 'react-redux-form-lite';
import { useSelector } from 'react-redux';
import Layout from '../../components/layout';
import BodyExample from '../../components/body-example';
import JsonExample from '../../components/json-example';
import Form from '../../components/form';

const Row = styled.div`
  display: flex;
`;

const Example = ({ handleSubmit }) => {
  const onSubmit = ({ values }: IReduxFormSubmitEvent<any>) => {
    alert(JSON.stringify(values, null, '  '));
  };

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
      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};

interface IProps {
  handleSubmit: any,
}

const SimpleForm = ({
  handleSubmit,
}: IProps) => {

  // @ts-ignore
  const formState = useSelector(state => state.reduxForm.simpleForm as IReduxFormState<any>);

  return (
    <Layout navPanelKey="examples">
      <BodyExample>
        <div>
          <h1>Simple form</h1>
        </div>
        <JsonExample formName="simpleForm" formState={formState} />
      </BodyExample>
    </Layout>
  );
};

export default reduxForm({
  form: 'simpleForm',
})(SimpleForm);
