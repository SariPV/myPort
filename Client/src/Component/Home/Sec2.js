
import "./Sec.css"
import resume from "../Home/image/Pro1.jpg"
import pro from "../Home/image/pro_blue.PNG"
import simple from "../Home/image/sim_white.PNG"
import { Link } from "react-router-dom"
const Sec2 = () => {

    return(
        <div className="section2">
               <h2>Variety of resume templates</h2>
            <div className="imgContainer">
            <img className="resumeImg" src={resume} />
            <img className="resumeImg" src={pro} />
            <img className="resumeImg" src={simple} />
            </div>
            <Link to="/profile">
            <button className="tryNow">Try now</button>
            </Link>

        </div>
    )
}

export default Sec2;