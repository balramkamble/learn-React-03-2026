    import { useContext, useRef } from "react"
    import { FirstName, LastName } from "./A"
    export default function C(){
        const fname = useContext(FirstName);
        const lname = useContext(LastName);

        const inputRef = useRef(null);
        const handleFocus =()=>{
            inputRef.current.focus();
            inputRef.current.placeholder="Focus Added";
            inputRef.current.value="Focus Added";
            inputRef.current.style.border = '1px solid #aaaaaa';
        }
        return(
            <div>
            {fname} {lname}
            <br />
            <label htmlFor="fnama">Full Name</label>
            <input type="text" ref={inputRef} className="form-control mb-2"/>
            <button className="btn btn-primary" onClick={handleFocus}>Add Focus</button>
            </div>
        )











        
    }