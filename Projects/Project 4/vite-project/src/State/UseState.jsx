import React, { useState } from 'react';
const UseState = () =>{
    const [age, setAge] = useState(0);
    let functionOnClick=()=>{
       console.log("Button Clicked");
       setAge(age-1);
    }

    return(
        <div>
            <h1>Age: {age}</h1>
            <button onClick={functionOnClick}>
                Increase Age
            </button>
        </div>
    )
}
export default UseState;










