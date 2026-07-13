
import { useState } from 'react';
import './App.css'
import Color from './Color';
import Student from './Student';
//form handling
function App() {
  const [name, setName] = useState("");
  const handleClick = () => {
    console.log("clicked");

  }
  const handleChange = (e) => {

    setName(e.target.value);
    console.log(e.target.value);
    console.log(e.target);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("emp obj =", emp);
    setEmp({empName:'', empRole:'',empSalary:''});

  }
  let [emp, setEmp] = useState({ empName: (""), empRole: (""), empSalary: ("") });
  // const handleName = (e) => {
  //   setEmp({ ...emp, empName: e.target.value });
  // }
  // const handleRole = (e) => {
  //   setEmp({ ...emp, empRole: e.target.value });
  // }
  // const handleSalary = (e) => {
  //   setEmp({ ...emp, empSalary: e.target.value });
  // }
  const handleInput = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
   

  }



  return (

    <>
      <center>
        <Student/>
        <Color/>
        <h1>Hello i am learning even handing</h1>
        <button onClick={() => handleClick()}>click me</button>
        Name:  <input type="text" name='uname' value={name} onChange={(e) => handleChange(e)} />
        <button onClick={() => setName('')}>clear</button>
        <h1>add employee</h1>
        <form onSubmit={handleSubmit}>
          name: <input type="text" name='empName' value={emp.empName} onChange={handleInput} />
          Role: <input type="text" name='empRole' value={emp.empRole} onChange={handleInput} />
          salary: <input type="text" name='empSalary' value={emp.empSalary} onChange={handleInput} />
          <button type="submit">submit</button>
        </form>

      </center>
    </>
  )
}

export default App
