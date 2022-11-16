
import "./Sec.css"
import resume from "../Home/image/Pro1.jpg"
import pro from "../Home/image/pro_blue.PNG"
import simple from "../Home/image/sim_white.PNG"
import { Link } from "react-router-dom"
const Sec3= () => {

    return(
      <div className="section3">
        <p>ABOUT US</p>
            <h2>Why choose MyPortfolio?</h2>
            <p className="text">Choose font types, sizes, and spacing. You can bold,
                italicize, and underline your text. You don’t need to use MS
                Word resume templates: we take care of the formatting,
                and give you access to the best resume designs you’ll ever see.</p>
                <Link to="/profile">
                <button className="fillprofile">Create your profile</button>
                </Link>

        </div>
    )
}

export default Sec3;