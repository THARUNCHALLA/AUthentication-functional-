import {useContext, useState} from "react"
import LanguageContext from "../../Context/LanguageContaxt"
import { useNavigate } from "react-router-dom"


const Login=()=>{
    const {login}=useContext(LanguageContext)
    const [name,setName]=useState("")
    const Navigate = useNavigate()

    const Login=()=>{
        login(name)
        if (name){
        Navigate("/",{ replace:true })
        }
    }

    return(
        <div>
            <input type="text" value={name} placeholder="enter username" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={Login}>login</button>
        </div>
    )
}

export default Login