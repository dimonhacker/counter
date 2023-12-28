import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Counter";

function App() {

    let [block, setBlock] = useState(false);
    let localMax = localStorage.getItem("max");
    let localMin = localStorage.getItem("min");
    const [maxCount, setMaxCount] = useState(localMax ? JSON.parse(localMax) : 5);
    const [startCount, setStartCount] = useState(localMin ? JSON.parse(localMin) : 0);
    const [count, setCount] = useState(startCount);
    const incHandler = (c: number) => {
        if (c <= maxCount) {
            setCount(c)
        }
        setBlock(c===maxCount)
    }
    const setMax = (val: number) => {
        setMaxCount(val)
    }
    const setStart = (val: number) => {
        setStartCount(val)
    }
    return (
        <div className="App">
            <Counter count={count} incHandler={incHandler} block={block} maxCount={maxCount} startCount={startCount}
                     setMax={setMax} setStart={setStart}></Counter>
        </div>
    );
}

export default App;
