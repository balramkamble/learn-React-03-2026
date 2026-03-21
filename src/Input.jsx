import { useState } from "react";
export default function Input(){
    const [inputValue, setInputValue] = useState("");

    const resetValue = () =>{
        setInputValue("");
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get('fname')+""+formData.get('email'));
    }

     const [uname, setUname] = useState("");
     const [uemail, setUemail] = useState("");
     const [upassword, setUpassword] = useState("");

    return(
        <div>
            <h1>Input Component</h1>
            <input type="text" className="form-control" value={inputValue } onChange={(e)=>setInputValue(e.target.value)} />
           <p>{inputValue}</p> 
            <button className="btn btn-secondary" onClick={resetValue}>Reset</button>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fname">
                        Full Name: 
                    </label>
                    <input type="text" name="fname" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email">
                        Email: 
                    </label>
                    <input type="text" name="email" className="form-control" />
                </div>
                <button className="btn btn-primary">
                    Submit
                </button>
            </form>
            <hr />

                <form>
                    <div className="mb-3">
                        <label htmlFor="uname">User Name: </label>
                        <input type="text" name="uname" value={uname} className="form-control"  onChange={(e)=>setUname(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="uemail">Email: </label>
                        <input type="text" name="uemail" value={uemail}  className="form-control"  onChange={(e)=>setUemail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="upassword">Password</label>
                        <input type="text" name="upassword" value={upassword}  className="form-control"  onChange={(e)=>setUpassword(e.target.value)}/>
                    </div>                                                          
                    <button className="btn btn-primary">Submit</button>
                     <button className="btn btn-primary" onClick={ ()=>{setUname(''); setUemail(''); setUpassword('')}}>Reset</button>
                </form>
            <p>
                {uname}
            </p>
            <p>
                {uemail}
            </p>
            <p>
                {upassword}
            </p>
        </div>
    )
}