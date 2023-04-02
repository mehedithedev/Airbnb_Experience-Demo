import React,{useState} from 'react';
function InputState() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event)=>{
        setInputValue(event.target.value);
    }
    const [showText, setShowText] = useState(true)
    const [textColor, setTextColor] = useState('yellow')
    const toggleText = ()=>{
        setShowText(!showText)
    }
    const toggleTextColor= ()=>{
        setTextColor('blue' ? 'red' : 'orange')
    }

    const [backColor, setBackColor] = useState('gray')
    const toggleBackColor= ()=>{
        setBackColor('gray' ? 'green' : 'orange')
    }

    return(
        <div>
            <h1>Input Text </h1>
            <input type="text" onChange={handleInputChange}/>
            <h1>{inputValue}</h1>
            {showText && <h2 style={{color:textColor}}>Show or hide this piece of text</h2>}
            <button onClick={toggleText}>Show/Hide</button>
            <button onClick={toggleTextColor}>Change the color</button>
            <h3>The background of this text is going to be changed </h3>
            <button>Click the button to change the background</button>
            <div></div>
        </div>
    )
}
export default InputState;