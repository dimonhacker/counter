import React, {useState} from 'react';
import {StyledButton} from "./components/StyledButton";
import {StyledSpan} from "./components/StyledSpan";
import {StyledWrapper} from "./components/StyledWrapper";
import {StyledInput} from "./components/StyledInput";
import {Theme} from "./GlobalStyle";
import styled from "styled-components";


type CounterType = {
    count: number,
    incHandler: (c: number) => void
    block: boolean
    maxCount: number
    startCount: number
    setMax: (val: number) => void
    setStart: (val: number) => void
}

export const Counter = (props: CounterType) => {

    let [toggle,setToggle] = useState(1);

    let color = Theme.mainColor
    let [max, setMx] = useState(props.maxCount);
    let [min, setMn] = useState(props.startCount);
    const setMaxTmp = (val: number) => {
        setMx(val);
    }
    const setMinTmp = (val: number) => {
        setMn(val);
    }

    const checkValid = () => {
        return checkMaxValid() && checkMinValid();
    }
    const checkMaxValid = () => {
        return max - min > 0 && max > 0
    }
    const checkMinValid = () => {
        return min >= 0
    }

    function getTextObject() {
        if (checkValid()) {
            if (max !== props.maxCount || min !== props.startCount) {
                return {text: 'enter values and press \'set\'', valid: true, ready: false}
            } else if (max === props.maxCount && min === props.startCount) {
                return {text: props.count.toString(), valid: true, ready: true}
            }
        } else return {text: 'Incorrect Values!', valid: false, ready: false}
        return {text: props.count.toString(), valid: true, ready: true}
    }

    const isBtnSetDisabled = () => {
        return !checkValid() || (max === props.maxCount && min === props.startCount)
    }
    const isBtnIncDisabled = () => {
        return props.block || !getTextObject()['ready']
    }
    const isBtnResetDisabled = () => {
        return (props.count === props.startCount) || !getTextObject()['ready']
    }
    const setValues = () => {
        props.setStart(min);
        props.setMax(max);
        props.incHandler(min)
        localStorage.setItem("max", JSON.stringify(max))
        localStorage.setItem("min", JSON.stringify(min))
        setFormVisible(false)
    }
    const [formVisible, setFormVisible] = useState(false)

    return (
        <>
            <StyledHeader>
                <input id="v1" type={"radio"} name={"version"} checked={toggle===1}  onClick={()=>setToggle(1)}></input>
                <StyledLabel htmlFor="v1">v1</StyledLabel>
                <input id={"v2"} type={"radio"} name={"version"} checked={toggle===2} onClick={()=>setToggle(2)}></input>
                <StyledLabel htmlFor={"v2"}>v2</StyledLabel>
            </StyledHeader>
            <StyledWrapper color={color} filled={false} bordervisible={"none"} justify={"space-around"} width={"70vw"}>

                <StyledWrapper visibility={formVisible || toggle === 1} height={"380px"} width={"480px"} color={color}
                               filled={false} direction={"column"}
                               gap={"20px"} justify={"start"}>
                    <StyledWrapper height={"60%"} width={"90%"} color={color} filled={false} direction={"column"}
                                   align={"space-between"}
                                   gap={"2em"}
                                   mgn={"1.5em 1.5em 0 1.5em"}>
                        <StyledWrapper color={color} filled={false} bordervisible={"none"} justify={"space-around"}
                                       width={"10"}>
                            <StyledSpan size={"1.5em"} color={color}>max value:</StyledSpan>
                            <StyledInput isError={!checkMaxValid()} setVal={setMaxTmp} value={max}/>
                        </StyledWrapper>
                        <StyledWrapper color={color} filled={false} bordervisible={"none"} justify={"space-around"}>
                            <StyledSpan size={"1.5em"} color={color}>start value:</StyledSpan>
                            <StyledInput isError={!checkMinValid() || !checkValid()} setVal={setMinTmp} value={min}/>
                        </StyledWrapper>
                    </StyledWrapper>
                    <StyledWrapper mgn={"0 20px 20px 20px"} pdg={"10px"} width={"90%"} color={color}
                                   filled={false}
                                   justify={"space-around"}>
                        <StyledButton name={"set"} disabled={isBtnSetDisabled()} onClick={setValues}
                                      color={color}/>
                    </StyledWrapper>
                </StyledWrapper>
                <StyledWrapper visibility={!formVisible || toggle === 1} height={"380px"} width={"480px"} color={color}
                               filled={false} direction={"column"}
                               gap={"20px"} justify={"start"}>
                    <StyledWrapper height={"60%"} width={"90%"} color={color} filled={true}
                                   mgn={"1.5em 1.5em 0 1.5em"}><StyledSpan
                        className={props.block && getTextObject()['ready'] ? 'red' : ''}
                        color={!getTextObject()['valid'] ? 'red' : ''}>{getTextObject()['text']}</StyledSpan></StyledWrapper>
                    <StyledWrapper mgn={"0 20px 20px 20px"} pdg={"10px"} width={"90%"} color={color}
                                   filled={false}
                                   justify={"space-around"}>
                        <StyledButton name={"inc"} disabled={isBtnIncDisabled()}
                                      onClick={() => props.incHandler(props.count + 1)}
                                      color={color}/>
                        <StyledButton name={"reset"} disabled={isBtnResetDisabled()}
                                      onClick={() => props.incHandler(props.startCount)}
                                      color={color}/>
                        <StyledButton visibility={toggle === 2} name={"set"} disabled={false}
                                      onClick={() => setFormVisible(true)}
                                      color={color}/>
                    </StyledWrapper>
                </StyledWrapper>
            </StyledWrapper>
        </>
    );


};

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  margin: 2em;
`
const StyledLabel = styled.label`
    color: ${Theme.textColor2};
`

