import axios from "axios";
import { useEffect, useState } from "react"
export default function Showuser(){

    const[users,setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(()=>{
        const url = 'http://localhost:3000/datahub';
        const fetchData = async()=>{
            try {
                const response = await axios.get(url);
                setUsers(response.data);
            } catch(error){
                setError(error.message);
            }
        }
        fetchData();
    })
    const showDetails=(uid)=>{
        users.filter((user)=>{
            if(user.id === uid){
               alert(`Name: ${user.name}\nMobile: ${user.mobile}\nEmail: ${user.email}\nChannel: ${user.channel}\nCourse: ${user.course}\nRating: ${user.rating}`);
            }
        })
        
    }

    return(
        <>
        <h1>Show User</h1>
{error}
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>name</th>
               
                    <th>mobile</th>
               
                    <th>email</th>
               
                    <th>channel</th>
               
                    <th>course</th>
               
                    <th>rating</th>
                     <th>Action</th>
                </tr>                            
            </thead>
            <tbody>
                {users.map((user)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                            <td>{user.channel}</td>
                            <td>{user.course}</td>
                            <td>{user.rating}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>showDetails(user.id)}>Show {user.id}</button>
                            </td>
                        </tr>
                    )
                })}
             
            </tbody>
        </table>
        </>
    )
}