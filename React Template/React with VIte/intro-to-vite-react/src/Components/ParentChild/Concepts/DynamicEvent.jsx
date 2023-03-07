function DynamicEvent() {
  // Code used to generate random number from 1-3
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  // Prompt to get the user input which should be a number
  let userInput = prompt("Enter a number");
  alert(`Secret Number: ${randomNum} and your number is: ${userInput}`);



  return(
    <div>
        <h1>
            Task is: Add a button and handle a click event
        </h1>
        <button onClick={DynamicEvent}>
            Guess the number between 1 and 3
        </button>
    </div>
)
}

export default DynamicEvent