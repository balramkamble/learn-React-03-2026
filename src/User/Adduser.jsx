import { useState } from "react";
import axios from "axios";

export default function Adduser(){

    const [details, setDetails] = useState({
        name:'',
        mobile:'', 
        email:'',
        channel:'',
        course:'',
        rating:''
    })
    const handleChange = (event)=>{
        const {name,value} = event.target;
        setDetails((preValue)=>{
            return {...preValue, [name]:value}
        })
    }
    const handleSubmit=(e)=>{
           e.preventDefault();
            const url = 'http://localhost:3000/datahub';
            const postData = async()=>{
                try {
                    const response = await axios.post(url,details);
                   setDetails(response.data);
                }catch(error){
                    setDetails(error.message)
                }
            }
            postData();
    }
    return(
        <div>
       
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="form-control" value={details.name} onChange={handleChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="mobile">Mobile</label>
                <input type="text" id="mobile" name="mobile" className="form-control" value={details.mobile} onChange={handleChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" className="form-control" value={details.email} onChange={handleChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" className="form-control" value={details.channel} onChange={handleChange}/>
            </div><div className="mb-2">
                <label htmlFor="course">Course</label>
                <input type="text" id="course" name="course" className="form-control" value={details.course} onChange={handleChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="rating">Rating</label>
                <input type="text" id="rating" name="rating" className="form-control" value={details.rating} onChange={handleChange}/>
            </div>
            <button className="btn btn-primary">Add User</button>
        </form>
      </div>
    )
}