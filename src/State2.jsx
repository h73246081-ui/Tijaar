import { useState } from "react"
const Counter=()=>{
    const [counter,updateCount]=useState(0);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>{
                updateCount(counter+1)
            }}>Click</button>
            
            <button onClick={()=>{
                updateCount(counter-1)
            }}>Decrease</button>

            <button onClick={()=>{
                updateCount(0)
            }}>Rest</button>
        </div>
    )
}
export default Counter