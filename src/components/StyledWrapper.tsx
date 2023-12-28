import styled from "styled-components";
import React from 'react';

type WrapperType = {
    width?: string,
    height?: string,
    color: string,
    filled: boolean,
    direction?: string
    gap?: string
    justify?: string
    align?: string

    mgn?: string
    pdg?: string
    isPointer?: boolean
    bordervisible?:string
    visibility?:boolean
}



export const StyledWrapper = styled.div<WrapperType>`

  margin: ${props => props.mgn || ''};
  padding: ${props => props.pdg || ''};
  display: ${props => props.visibility===false? "none":"flex"};
  flex-direction: ${props => props.direction || ''};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  cursor: ${props => (props.isPointer && "pointer") || ''};
  border: 2px solid ${props => props.color};
  background-color: ${props => (props.filled && props.color) || ''};
  border-radius: 10px;
  width: ${props => props.width};
  height: ${props => props.height || ''};
  gap: ${props => (props.gap) || '0px'};
  border: ${props => (props.bordervisible) || ""};

  .red {
    color: red;
  }
`