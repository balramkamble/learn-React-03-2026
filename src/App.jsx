
import Task_01 from "./Task_01";
import Counter from "./Counter";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Object from "./Object";
import Time from "./Time";
import Effect from "./Effect";
import A from "./A";
import B from "./B";
import Axios from "./Axios";
import Form from "./Form";
import Alluser from "./User/Alluser";

function App() {

  const displayAlert = (name)=>{
    alert(name)
  }

  return (
    <>
    <div className="container">
      <h1>Learn React in 2026</h1>
      <Task_01></Task_01>
      <Counter />
      <Input></Input>
      <Checkbox />
      <hr />
      <Radio />
      <Object></Object>
      <Time></Time>
      <Effect />
      <A></A>
      <B displayAlert={displayAlert} name={'Aradhya'}></B>
      <B displayAlert={displayAlert} name={'Baliram'}></B>
      <Axios></Axios>
      <Form />
      <hr />
      <Alluser />

     </div>
    </>
  )
}

/*welcome to pune*/

export default App
