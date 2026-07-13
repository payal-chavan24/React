import React, { useState } from 'react'

const Student = () => {
    let [stdname, setStudname] = useState('')
    let [show, setShow] = useState(null);
    const handlename = (e) => {
        setStudname(e.target.value)
        setShow(true);
    }

    return (
        <div>
            stdName <input type="text" onChange={handlename} />
            {
                show &&
                <h5>Name:{stdname}</h5>
            }
        </div>
    )
}

export default Student
