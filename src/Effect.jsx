import { useEffect, useState } from "react";
export default function Effect(){
    const [items, setItems] = useState([]);
    const [content, setContent] = useState('posts');
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('Content mounted');
    }, [])
     useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/'+content)
        .then(response => response.json())
        .then(json => setItems(json))

        console.log('Content updated');
        return()=>{
            console.log('Content unmounted');
        }
    },[content])
    return(
        <div>
            <button className="btn btn-primary" onClick={ ()=> setCount(count+1)}>Count{count}</button>
            <button className="btn btn-primary" onClick={ ()=> setContent('posts')}>Posts</button>
            <button className="btn btn-primary" onClick={ ()=> setContent('users')}>Users</button>
            <button className="btn btn-primary" onClick={ ()=> setContent('comments')}>Comments</button>
          <div> 
            {content}
            <ul>
              {items && items.map(item=>{
                return <li key={item.id}>{item.name} {item.title}</li>
              })}
            </ul>
            </div>
        </div>   
    )
}