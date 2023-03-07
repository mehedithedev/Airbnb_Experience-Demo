// Array Disctructuring

import { useState } from "react";

const arr = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = arr;

console.log(a, b, c, d, e)

const newArray= ['Apple', 'Orange', 'Mango', 'Banana']
const [f,j,k,l ]= newArray
console.log(f,j,k,l)

// Using useState: 
// Give proper step by step guide to use useState: 

const [name, setName] = useState('Mehedi Hasan')

console.log(name)

setName('Mehedi Hasan')

console.log(name)

// Another more detailed example of arrayo distructuring in a simplified manner with instructions: 

const [nameOfarray, functionOfArray]= useState(true)
console.log(nameOfarray)
setName('the name has been changed')
console.log(first)
