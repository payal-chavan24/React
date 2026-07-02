import { useState } from "react";



const Counter = () => {
    let num = 0;
    let [count, setCount] = useState(0);

    const plus = () => {
        num++;
        setCount(count+1);
        console.log("num= " + num);
        console.log("count =" + count);


    }
     const minus = () => {
      if(count<=0){
        alert("count can not be negative")

      }else{
          num--;
        setCount(count-1);
        console.log("num= " + num);
        console.log("count =" + count);
      }


    }
    //  const reset = () => {
    //     num = 0;
    //     setCount(0);
    // }
    return (
        <div>
            <h1>Counter App</h1>
            <button onClick={plus}>
                Increase
            </button>
            <br />
            <button onClick={minus}>
                Decrease
            </button>
            <br />
             <button onClick={()=>setCount(0)}>
                Reset
            </button>
            <h3>Num ={num}</h3>
            <h3>Count ={count}</h3>
        </div>
    )
}

export default Counter
