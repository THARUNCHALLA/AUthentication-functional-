import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./index.css"
const UserData=()=>{
    const [Onedata,setOnedata]=useState()
    const params = useParams()
    const [Initial,setInitial]=useState(false)

    const GetParticularData=async()=>{
        const USERSDATA1 = await fetch("https://jsonplaceholder.typicode.com/users/"+params.id)
        if (USERSDATA1.ok===true){
        const ResponseData1 = await USERSDATA1.json()
        setInitial(true)
        setOnedata(ResponseData1)
        }
    }

    useEffect(()=>{
        GetParticularData()
    },[])

    return(
        <>
        {Initial && <div>
            <h1 className="Individual">User Details</h1>
            <h1 className="Individual">Name: {Onedata.name}</h1>
            <h1 className="Individual">Username: {Onedata.username}</h1>
            <h1 className="Individual">Email: {Onedata.email}</h1>
            <h1 className="Individual">Phone No:{Onedata.phone}</h1>
            <h1 className="Individual">Website: {Onedata.website}</h1>
        </div>
        }
        </>
    )
}

export default UserData