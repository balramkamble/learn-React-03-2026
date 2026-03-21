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
             {
                count==0?<h2>counter is{count}</h2>
                :count==1?<h2>counter is{count}</h2>
                :count==2?<h2>counter is{count}</h2>
                :count==3?<h2>counter is{count}</h2>
                :count==4?<h2>counter is{count}</h2>
                :<p>Not matched</p>
             }
        </div>
    )
}
export default Counter;