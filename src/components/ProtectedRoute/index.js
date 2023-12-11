import LanguageContext from "../../Context/LanguageContaxt"
import { useContext } from "react"
import { Navigate} from "react-router-dom"
const PrivateRoute=({children})=>{
    const {user}=useContext(LanguageContext)
    if(!user){
        return <Navigate to="/Login"/>
    }
    return(children);
}

export default PrivateRoute