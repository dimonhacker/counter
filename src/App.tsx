import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Counter";

function App() {
    const [count, setCount] = useState(0);
    let [block,setBlock] = useState(false);
    const incHandler = (c:number)=>{

        if(c<=5) {
            setBlock(false)
            setCount(c)
        }
        if(c>4){setBlock(true)}
    }

  return (
    <div className="App">
      <Counter count={count} incHandler={incHandler} block={block}></Counter>
    </div>
  );
}

export default App;
