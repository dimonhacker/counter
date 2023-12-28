import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Counter";

function App() {
    const [count, setCount] = useState(0);
    let [block,setBlock] = useState(false);
    const [maxCount, setMaxCount] = useState(5);
    const [startCount, setStartCount] = useState(0);
    const incHandler = (c:number)=>{

        if(c<=maxCount) {
            setBlock(false)
            setCount(c)
        }
        if(c>maxCount-1){setBlock(true)}
    }
    const setMax = (val:number)=>{
        setMaxCount(val)
    }
    const setStart = (val:number)=>{
        setStartCount(val)
    }
  return (
    <div className="App">
      <Counter count={count} incHandler={incHandler} block={block} maxCount={maxCount} startCount={startCount} setMax={setMax} setStart={setStart}></Counter>
    </div>
  );
}

export default App;
