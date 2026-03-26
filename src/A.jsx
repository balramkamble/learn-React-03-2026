import React,{ createContext } from "react";
import C from "./C";
const FirstName = createContext();
const LastName = createContext();

export default function A(){
    return(
        <div>
        <FirstName.Provider value="Ram">
            <LastName.Provider value="kamble">
            <C />
            </LastName.Provider>
        </FirstName.Provider>
        </div>
    )
}
export{FirstName, LastName}