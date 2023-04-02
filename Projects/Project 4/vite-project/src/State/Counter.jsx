import React, {useState} from "react";
const Counter=()=>{
const [count, setCount]= useState('0')
    const increamentar=()=>{
        setCount(count+1)
    }
    const decrementar=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    return(
        <React.Fragment>
            <h1>Counter value is: {count}</h1>
            <button onClick={increamentar}>Increment</button>
            <button onClick={decrementar}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </React.Fragment>
    )
}
export default Counter