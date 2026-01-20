import { useState } from "react";
import Counter from "./State2";

function State(){
    const [fruit,updateFruit]=useState("Apple")
    function setFruit(){
        updateFruit("Orange");
    }

    return (
        <div>
            <h1>{fruit}</h1>
            <button onClick={setFruit}>Change Fruit</button>
            <Counter/>
        </div>
    )

}
export default State