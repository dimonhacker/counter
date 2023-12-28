import React from 'react';
import styled from "styled-components";
import {Theme} from "../GlobalStyle";

type InputType = {
    value:number
    setVal: (c: number) => void

    isError:boolean
}
export const StyledInput = (props:InputType) => {

    return (
        <StyledInp isError={props.isError} setVal={props.setVal} type={"number"} value={props.value} onChange={(event)=>props.setVal(Number.parseInt(event.currentTarget.value))}/>
    );
};

const StyledInp = styled.input<InputType>`
  background-color: ${props=>(props.isError? '#fc6b6b':'white')};
  color: #282c34;
  font-size: 1.8em;
  width: 40%;
  box-shadow: 0 0 5px ${props=>(props.isError? '#cb0540':Theme.mainColor)};
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid ${props=>(props.isError? '#cb0540':Theme.mainColor)};
  border-radius: 5px;
  text-align: center;
`