// Create variables name, age, and city. Display all three values using JSX.
// Create two variables a and b. Display their:
// Sum
// Difference
// Product
// Division
// Remainder
// Create a variable isOnline = true. Display "Online" if true, otherwise "Offline" using the ternary operator.
// Create a variable marks = 75. Display "Pass" if marks are greater than or equal to 35, otherwise "Fail".
// Create a function showMessage() that prints "Welcome to React" in the console. Call it using a button click.
// Create a function showName(name) that accepts a parameter. Create three buttons:
// Payal
// Tejas
// Rahul
// Each button should print its respective name in the console.
// Create a function calculate(a, b) that prints:
// Addition
// Subtraction
// Multiplication
// Division
// Call it when a button is clicked by passing 20 and 5.
// Create a variable number = 987654. Use a while loop to count the number of digits and display the result.
// Create a variable number = 12345. Use a while loop to reverse the number and display both the original and reversed numbers.
// Create a small Student Dashboard:
// Name
// Roll Number
// Course
// Status (Active/Inactive using ternary)
// A button "Show Details" that prints all student details in the console.
import React from 'react'

const Task1 = () => {
    let name = "payal";
    let age = 22;
    let city = "pune";
    let a = 12;
    let b = 13;
    let isOnline = true;
    let marks = 75;
    function result(marks) {
        if (marks >= 35) {
            console.log("Passed");
        } else {
            console.log("Falied");
        }
    }
    function showMessage() {
        console.log("Welcome to react..!");

    }
    function showName(name) {
        console.log("name =" + name);

    }

    function calculator(a1, b1, sign) {
        if (sign == '+') {
            console.log("Sum =" + (a + b));

        } else if (sign == '-') {
            console.log("diff =" + (a - b));
        } else if (sign == '*') {
            console.log("product =" + (a * b));
        } else if (sign == '/') {
            console.log("division  =" + (a / b));
        } else if (sign == '%') {
            console.log("remainder =" + (a % b));
        }
    }
    let num = 987654;
    function countDigit(num) {
        let count = 0;
        while (num > 0) {
            count++;
            num = Math.floor(num / 10);

        }
    }
    let num1 = 12345;
    let temp = num1;
    function reverse(num1) {
        let rev = 0
        while (num1 > 0) {
            let digit = num1 % 10;
            rev = rev * 10 + digit;
            num1= Math.floor(num1 / 10);
        }
        console.log("Before reverse =" + temp);

        console.log("after reverse =" + rev);

    }
    let name1 = "payal"
    let rollNumber = 23;
    let course = "react";
    let status1 = true;
    function dashboard(name1, rollNumber, course,status1) {
        console.log("name " + name1);
        console.log("RollNumber =" + rollNumber);
        console.log("Course =" + course);
        if (status1) {
            console.log("Active");

        } else {
            console.log("Inactive");
        }

    }

    return (
        <div>
            <h1>name:{name}</h1>
            <h1>age:{age}</h1>
            <h1>city:{city}</h1>
            <h1>Sum:{a + b}</h1>
            <h1>diff:{a - b}</h1>
            <h1>div:{a / b}</h1>
            <h1>product:{a * b}</h1>
            <h1>remainder:{a % b}</h1>
            <h1>Online:{isOnline ? "online" : "offline"}</h1>
            <h1>Result :{result(marks)}</h1>
            <button onClick={() => showMessage()}>show</button><br />
            <button onClick={() => showName("payal")}>Payal</button><br />
            <button onClick={() => showName("tejas")}>tejas</button><br />
            <button onClick={() => showName("rahul")}>rahul</button><br />
            <button onClick={() => calculator(10, 20, '*')}>airhthmetic</button><br />
            <h1>Result:{countDigit(num)}</h1><br />
            <h1>ReverseNumber:{reverse(num1)}</h1><br />
            <button onClick={()=>dashboard(name1, rollNumber, course)}>dashBoardButton</button>


        </div>
    )
}

export default Task1
