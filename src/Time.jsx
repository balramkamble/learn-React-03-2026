import { useState } from "react"

export default function Time(){
    const [time, setTime]= useState('');
    setInterval(()=>{
       const date = new Date();
       setTime(date.toLocaleTimeString());
    },1000)
    return (
        <div>
            <h2>
                {time}
            </h2>
        </div>
    )
}