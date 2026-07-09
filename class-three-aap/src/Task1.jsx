import React, { useState } from 'react'

const Task1 = () => {
    const [name, setName] = useState(" ");
    const handleChange = (e) => {
        console.log(e.target.value);
          setName(e.target.value)
    }
    return (
        <div>
            <h1>greet from Task1 components</h1>
            <button onClick={() => setName("userName")
            }>DefaultButton</button>
            <h1>Name:</h1> <input type="text" onChange={handleChange} />
            <h1>hello...{name}</h1>
        </div>
    )
}

export default Task1
