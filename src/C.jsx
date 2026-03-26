    import { useContext } from "react"
    import { FirstName, LastName } from "./A"
    export default function C(){
        const fname = useContext(FirstName);
        const lname = useContext(LastName);
        return(
            <div>
            {fname} {lname}
            </div>
        )











        
    }