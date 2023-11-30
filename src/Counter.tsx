import React from 'react';
import styled from 'styled-components';
import {useAutoAnimate} from "@formkit/auto-animate/react";

type SpanType = {
    size: string
}
type WrapperType = {
    width?: string,
    height?: string,
    color: string,
    filled: boolean,
    direction: string
    gap?: string
    justify?: string
    align?: string

    margin?: string
    padding?: string
    isPointer?: boolean
}
type ButtonType = {
    width?: string,
    height?: string,
    color: string,

    margin?: string
    padding?: string
}

type CounterType = {
    count: number,
    incHandler: (c: number) => void
    block: boolean
}
export const Counter = (props: CounterType) => {
    let color = "#61dafb"
    return (
        <div>
            <StyledWrapper height={"380px"} width={"480px"} color={color} filled={false} direction={"column"}
                           gap={"20px"} justify={"start"}>
                <StyledWrapper height={"60%"} width={"90%"} color={color} filled={true}
                               direction={"row"} margin={"1.5em 1.5em 0 1.5em"}><StyledSpan
                    className={props.block ? 'red' : ''} size={"5em"}>{props.count}</StyledSpan></StyledWrapper>
                <StyledWrapper margin={"0 20px 20px 20px"} padding={"10px"} width={"90%"} color={color} filled={false}
                               direction={"row"} justify={"space-around"}>
                    <StyledButton disabled={props.block} onClick={() => props.incHandler(props.count + 1)}
                                  margin={"20px 20px 20px 20px"} color={color}>
                        <StyledSpan size={"4em"}>inc</StyledSpan>
                    </StyledButton>
                    <StyledButton disabled={props.count === 0} onClick={() => props.incHandler(0)}
                                  margin={"20px 20px 20px 20px"} color={color}>
                        <StyledSpan size={"4em"}>reset</StyledSpan>
                    </StyledButton>
                </StyledWrapper>
            </StyledWrapper>
        </div>
    );
};
const StyledSpan = styled.span<SpanType>`
  color: #282c34;
  font-size: ${props => props.size || ''};
  font-weight: 700;
  padding-left: 0.5em;
  padding-right: 0.5em;
`
const StyledButton = styled.button<ButtonType>`
  margin: ${props => props.margin || ''};
  padding: ${props => props.padding || ''};
  cursor: pointer;
  border: 2px solid ${props => props.color};
  background-color: ${props => props.color};
  border-radius: 10px;
  width: ${props => props.width};
  height: ${props => props.height || ''};

  &:active {
    opacity: 50%;
  }

  &:disabled {
    opacity: 50%;
  }
`
const StyledWrapper = styled.div<WrapperType>`

  margin: ${props => props.margin || ''};
  padding: ${props => props.padding || ''};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  cursor: ${props => (props.isPointer && "pointer") || ''};
  border: 2px solid ${props => props.color};
  background-color: ${props => (props.filled && props.color) || ''};
  border-radius: 10px;
  width: ${props => props.width};
  height: ${props => props.height || ''};
  gap: ${props => (props.gap) || '0px'};

  .red {
    color: red;
  }
`
