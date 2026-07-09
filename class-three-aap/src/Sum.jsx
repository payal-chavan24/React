import React, { useState } from 'react'

const Sum = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);



    return (

        <div>
            <h1>hello from sum componets</h1>
            <h1>Enter num1:</h1><input type="text" onChange={(e) => setNum1(Number(e.target.value))} />
            <h1>Enter num2:</h1><input type="text" onChange={(p) => setNum2(Number(p.target.value))} /> <br />
            <button onClick={()=>setSum(num1+num2)}>CalculateSum</button> 
            <h1>sum:{sum}</h1>

        </div>
    )
}

export default Sum
