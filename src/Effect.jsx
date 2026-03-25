export default function Effect(){
    const [content, setContent] = useState('Post')
    return(
        <div>
            <button className="btn btn-primary" onClick={ ()=> setContent('Post')}>Post</button>
            <button className="btn btn-primary" onClick={ ()=> setContent('Userr')}>User</button>
            <button className="btn btn-primary" onClick={ ()=> setContent('Comment')}>Comments</button>
           {content}
        </div>   
    )
}