
// Create a variable:

// let name = "Tejas";

// Display the following output on the webpage:

// Welcome... Tejas

// Create two variables:

// let num1 = 10;
// let num2 = 3;

// Display the following on the webpage:

// Sum
// Difference
// Product
// Division
// Remainder

// Create a variable:

// let digit = 35124;

// Write a JavaScript program using a while loop to count the number of digits and display the result on the webpage.

// Output:

// Digit = 35124
// Count of Digits = 5
import React from 'react'

const Task1 = () => {
    let name = "tejas";
    let num1 = 12;
    let num2 = 3;
    let digit = 35124;
    let temp=digit;
    let count = 0;
    while (digit > 0) {
        count++;
        digit = Math.floor(digit/ 10);

    }
  
    
    return (
        <div>
            <h1>Welcome ....!{name}</h1>
            <h1>sum={num1 + num2}</h1>
            <h1>diff={num1 - num2}</h1>
            <h1>product={num1 / num2}</h1>
            <h1>divide={num1 / num2}</h1>
            <h1>remainder={num1 % num2}</h1>
            <h1>Digit :{temp}</h1>
            <h1>Count :{count}</h1>

        </div>
    )
}

export default Task1
