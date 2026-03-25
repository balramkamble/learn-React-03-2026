import { useState } from "react"

export default function Radio(){
const list = ['Male', 'Female', 'Transgender']
const [ radioVal, setRadioVal] = useState();
const handleEvent = (event)=>{
setRadioVal(event.target.value);
}

const [dropVal, setDropVal] = useState('Male');
const handleDropdown=(e)=>{
    setDropVal(e.target.value);
}
    return(
        <div>
            <h2>
                Salected value using Radio  {radioVal}
            </h2>
            {
                list.map((val, ind)=>{
                    return <label htmlFor={val} key={ind}><input type="radio" name="gender" id={ind+val} value={val} onChange={handleEvent} />{val} </label>
                    
                })
            }
            <hr />
           <h2>
            Selected Value using Dropdown {dropVal}
           </h2>
           <select name="dgender" id="dgender" className="form-select w-25" onChange={handleDropdown}>
            {list.map((val,ind)=>{
                return <option value={val} key={ind}>{val}</option>
            })}
           </select>

        </div>
    )
}