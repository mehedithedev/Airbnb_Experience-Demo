// document.querySelector('#app').innerHTML = `
//   <div>
//    <div>
//         <img src="./Components/images/React.png" alt=""
//         width="70px"
//         />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on GIthub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//
//     </div>
//
//   </div>
// `

import {React} from "react";
import {ReactDOM} from "react-dom";
import {App} from "./src/App";

const page= (

    // <div>
    //     <h1>Hello</h1>
    // </div>
)
ReactDOM.render(<App/>,document.querySelector('#root'))