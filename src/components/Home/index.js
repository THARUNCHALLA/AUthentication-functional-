import { useNavigate } from "react-router-dom"
import LanguageContext from "../../Context/LanguageContaxt"
import { useContext } from "react"
const Home=()=>{
    console.log(useContext(LanguageContext))

    const Tharun = useNavigate()

    const clickSubmit=()=>{
        Tharun("/successfully")
    }

    return(
        <div className="container">
            <h1>Home</h1>
            <button onClick={clickSubmit}>Submit</button>
        </div>
    )
}

export default Home