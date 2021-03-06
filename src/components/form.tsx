import * as React from "react"
import styled from "styled-components"

interface IProps {
}

const Form = styled.form<IProps>`
  border: 1px solid #c1c1c1;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 4px;

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
  
  .row {
    display: flex;
    justify-content: space-between;
  }
  
  .direction-column {
    display: flex;
    flex-direction: column;
  }
  
  .message-error,
  .message-warning {
    font-size: 14px;
    height: 14px;
    line-height: 14px;
    margin-bottom: 0;
    padding-left: 7px;
  }
  
  .message-error {
    color: #9f0000;
  }
  
  .message-warning {
    color: #7a7a00;  
  }
  
  .input-error {
    border: solid 1px red;
  }
  
  .input-warning {
    border: solid 1px #9f9f00;
  }
  
  .authors, .books {
    display: flex;
    flex-direction: column;
    align-items: center;
  
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        position: relative;
        padding-top: 25px;
      }
    }
  }
  
  .author, .book {
    padding: 10px;
    border: dashed 2px black;
    margin-bottom: 16px;
    background-color: white;
  }
  
  .book {
    padding: 10px;
    background-color: #f6eedb;
    border: dashed 1px black;
  }
  
  .books {
    
  }
  
  .close-button {
    position: absolute;
    right: 4px;
    top: 4px;
  }
`

export default Form
