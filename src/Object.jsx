export default function Object(){
    const user = [
        {
            id:1,
            name: 'Baliram Kamble',
            email: 'balram.kamble@gmail.com'
        },
        {
            id:2,
            name: 'Aradhya Kamble',
            email: 'aradhya.kamble@gmail.com'
        }
]
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((val, ind)=>{
                            return (<tr key={ind}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                            </tr>)
                        })
                    }                   
                </tbody>
            </table>
        </div>
    )
}