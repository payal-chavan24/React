import React from 'react'
import { useState } from 'react'

const Color = () => {
    let [clr, setClr] = useState('');
    return (
        <div>
            add colour <input type="text" onChange={(e) => setClr(e.target.value)} />
            <div style={{
                backgroundColor: clr,
                height: "200px",
                width: "200px"
            }}>

            </div>
        </div>

    )
}

export default Color
