import axios from "axios"
import { useEffect, useState } from "react"
export default function Axios(){
const[users,setUsers] = useState([]);
const[error, setError] = useState('');
/*     useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            setUsers(response.data);
        }).catch((error)=>{
            setError(error.message);
        })
    },[]); */
   /*using async await*/
    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data)
            }catch(error){
                setError(error.message)
            }
        }
        fetchData();
    },[]);
  
    return(
        <>
        <h1>Axios</h1>
        <p>
            {error !=='' && error}
        </p>
        <ul>
            {users.map((user)=>{
                return <li key={user.id}>
                    {user.email}
                </li>
            })}
        </ul>
        </>
    )
}
