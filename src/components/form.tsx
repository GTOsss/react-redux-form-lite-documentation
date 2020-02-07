import * as React from 'react';
import styled from 'styled-components';

interface IProps {
}

const Form = styled.form<IProps>`
  div {
    display: flex;
    margin: 6px 0;
  }
  
  div > div {
    flex: 1;
    flex-flow: wrap;
  }
  
  div > div > label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  
  div > div > label > input {
    flex: none;
    margin: 0 4px;
  }
  
  label {
    text-align: right;
    min-width: 145px;
    padding: 0 8px 0 0;
    font-weight: bold;
  }
  
  & > div > label {
    padding-top: 8px;
  }

  input[type=checkbox] {
    flex: none;
    margin: 8px;
  }
  
  input {
    flex: 1;
    padding: 2px 6px;    
  }
  
  textarea {
    width: 100%;
    resize: vertical;
  }
`;

export default Form;
