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

    margin?: string
    padding?: string
    isPointer?: boolean
    borderVisible?:string
}



export const StyledWrapper = styled.div<WrapperType>`

  margin: ${props => props.margin || ''};
  padding: ${props => props.padding || ''};
  display: flex;
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
  border: ${props => (props.borderVisible) || ""};

  .red {
    color: red;
  }
`