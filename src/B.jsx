
import C from "./C";
export default function B({displayAlert, name}){
    
    return(
        <div>
            {/* send data to prent component */}
            <button className="btn btn-primary my-2" onClick={()=> displayAlert(name)}> CALL {name}</button>
        </div>
    )
}