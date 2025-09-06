import React, { useState } from "react"

function Counter(){
    const [count,setcount]=useState(0);
    return (
        <div>
          <h1>count</h1>
            <button onClick = { ()=>  setcount ((count)=> count+1 )}>click </button>
            <h2>{count}</h2>

            <h1>Enter a number </h1>

            <input type="text"/ >
        </div>
    )
}

export default Counter;