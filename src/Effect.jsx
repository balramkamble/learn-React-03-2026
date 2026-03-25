import { useEffect, useState } from "react"
export default function Effect(){
    const [content, setContent] = useState('Post');
    useEffect(()=>{
        console.log('Content mounted');
    }, [])
     useEffect(()=>{
        console.log('Content updated');
        return()=>{
            console.log('Content unmounted');
        }
    })
    return(
        <div>
            <button className="btn btn-primary" onClick={ ()=> setContent('Post')}>Post</button>
            <button className="btn btn-primary" onClick={ ()=> setContent('User')}>User</button>
            <button className="btn btn-primary" onClick={ ()=> setContent('Comment')}>Comments</button>
           {content}
        </div>   
    )
}