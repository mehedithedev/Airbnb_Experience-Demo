import React from 'react'
import User from './User'

export default function Maps() {
  const users= [
    {name: 'Pedro', age: 21},
    {name: 'Jake', age: 22},
    {name: 'Jessica', age: 24}
  ]
    return (
    <div>
        {users.map((user,key)=> {
            return(
               <div>
                    <User
                      name={user.name} age={user.age}
                    />

               </div>
            )
        } )}
      <User/>
    </div>
  )
}

// const User = (props) =>{
//   return (
//       <div>
//         {props.name} {props.age}
//       </div>
//   )
// }

