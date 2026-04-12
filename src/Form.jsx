import { useState } from "react"
export default function Form(){
    const [details, setDetails] = useState({
        fname:'',
        email:'',
        password:'',
        address:''  
    })
   const handleChange=(event)=>{
    const {name, value} = event.target;
    setDetails((preValue)=>{
        return{ ...preValue, [name]:value}
    })
   }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(details);
    setDetails({
            fname: '',
            email: '',
            password: '',
            address: ''
        });
  }
    return(
       <div className="w-50">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}> 
            <div className="mb-2">
                <label htmlFor="fname">Name</label>
                <input type="text" className="form-control" value={details.fname} name="fname" onChange={handleChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" value={details.email} name="email"  onChange={handleChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="password">Password</label>
                <input type="text" className="form-control" value={details.password} name="password" onChange={handleChange}/>
            </div>
             <div className="mb-2">
                <label htmlFor="address">Address</label>
                <textarea name="address" className="form-control" value={details.address} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
       </div>

    )
}