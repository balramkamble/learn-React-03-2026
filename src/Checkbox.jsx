import { useState } from "react"

export default function Checkbox(){
    const [skill, setSkill] = useState([]);
    const handleChange = (event) =>{
        if(event.target.checked){
            setSkill([...skill, event.target.value]);
        }
        else{
            setSkill(skill.filter((e)=>{
                return e!==event.target.value;
            }))
        }
       
    }
    return (
        <div>
            <h1>Checkbox Component</h1>


        {skill}

            <div className="form-check">
                 <label className="form-check-label" htmlFor="angular">
                    <input className="form-check-input" type="checkbox" onChange={handleChange} value="Angular" id="angular" />
                    Angular
                </label>
            </div>
            <div className="form-check">
                 <label className="form-check-label" htmlFor="react">
                    <input className="form-check-input" type="checkbox" onChange={handleChange} value="React" id="react" />
                   React
                </label>
            </div>
            <div className="form-check">
                 <label className="form-check-label" htmlFor="vue">
                    <input className="form-check-input" type="checkbox" onChange={handleChange} value="Vue" id="vue" />
                    Vue
                </label>
            </div>
        </div>
    )
}