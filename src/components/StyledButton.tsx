import styled from "styled-components";

import React from 'react';
import {StyledSpan} from "./StyledSpan";

export const StyledButton = (props:ButtonType) => {
    return (
        <StyledBtn  {...props}>
            <StyledSpan>{props.name}</StyledSpan>
        </StyledBtn>
    );
};
type ButtonType = {
    width?: string,
    height?: string,
    color: string,

    margin?: string
    padding?: string
    name:string
    disabled:boolean
    onClick:()=>void

    visibility?:boolean
}
export const StyledBtn = styled.button<ButtonType>`
  margin: ${props => props.margin || ''};
  padding: ${props => props.padding || ''};
  cursor: pointer;
  border: 2px solid ${props => props.color};
  background-color: ${props => props.color};
  border-radius: 10px;
  width: ${props => props.width};
  height: ${props => props.height || ''};
  display: ${props => props.visibility===false? "none":""};

  &:active {
    opacity: 50%;
  }

  &:disabled {
    opacity: 50%;
  }
`