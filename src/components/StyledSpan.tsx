import React from 'react';
import styled from "styled-components";

// export const StyledSpan = (props:SpanType) => {
//     return (
//         <StyledSpn className={props.clName}>
//             {props.text}
//         </StyledSpn>
//     );
// };
type SpanType = {
    clName?:string
    color?:string
    size?:string
}

export const StyledSpan = styled.span<SpanType>`
  color: ${props=> props.color || "#282c34"};
  font-size: ${props=> props.size ||"4em"};
  font-weight: 700;
  padding-left: 0.5em;
  padding-right: 0.5em;
`