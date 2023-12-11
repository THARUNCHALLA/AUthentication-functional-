import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./index.css"

const Users = () =>{

    const [USERS,setUsers] = useState([])

    const GetDATA=async ()=>{
        const USERSDATA = await fetch("https://jsonplaceholder.typicode.com/users")
        const ResponseData = await USERSDATA.json()
        setUsers(ResponseData)
        console.log(ResponseData)
    }
    
    useEffect(()=>{
        GetDATA()
    },[])

    return(
        <div>
            <h1>Users</h1>
            <ul>
                {USERS.map(each=>{
                    return (
                    <Link to={`/Users/${each.id}`} key={each.id} className="li">
                        <div>
                        <h3>{each.name}</h3>
                        <h3>{each.email}</h3>
                        </div>
                    </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users