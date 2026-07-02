import React, { useState } from 'react'

const Sum = () => {

    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    let [sum, setSum] = useState(0)

    return (
        <div>
            <h1>Hello from sum component</h1>
            num1=<input type="text" onChange={(e) => setNum1(Number(e.target.value))} />
            num2=<input type="text" onChange={(e) => setNum2(Number(e.target.value))} />
            <br /><br />
            <button onClick={() => setSum(num1 + num2)}>
                calculate Sum
            </button>
            <br /><br />
            <h2>Sum ={sum}</h2>
        </div>
    )
}

export default Sum
