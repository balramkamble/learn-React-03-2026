import { useState } from "react";
export default function Task_01() {
function showMessage(){
    alert("Button Clicked");
}
const name="  This is Task 01";
const [fruit, setFruit] = useState("Apple");

function operation(a, b, op){
    if(op=="+"){
        return a+b;
    }else if(op=="-"){
        return a-b;
    }
}

const changeFruit=()=>{
    setFruit("Mango");
}

    return (
        <div>
            <h1>
               {name.toUpperCase()}
            </h1>
            <img src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"   width={300} className="img-thumbnail" />
            <ul>
                <li>Lorem Ipsum is simply dummy text of the printing</li>
                 <li>Lorem Ipsum is simply dummy text of the printing</li>
                  <li>Lorem Ipsum is simply dummy text of the printing</li>
            </ul>
            <div>
         

            {operation(10, 5, "+")}
            </div>
            <button className="btn btn-primary me-3" onClick={showMessage}>
                Click Me
            </button>
            <button className="btn btn-warning" onClick={()=>alert('Show message')}>Show me</button>

            <div className="my-3">
              <p> {fruit}</p>
                <button className="btn btn-primary" onClick={changeFruit}>Change Fruit</button>
            </div>
        </div>
    )
}