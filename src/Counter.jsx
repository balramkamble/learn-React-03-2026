import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const handleClick=()=>{
     setCount(count+1)
    }
    return (
        <div>
            {count}
            <button className="btn btn-primary" onClick={handleClick}>Counter</button>
        </div>
    )
}
export default Counter;