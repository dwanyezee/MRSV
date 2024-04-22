import { Link } from "react-router-dom";
import Library from "./Library";

const Homepage = () => {
    return ( 
        <div className="homepage">
            <div className="masthead"> 
                <div className="masthead-image-display colorgradient">
                    <img className="" src="Images/Masthead_Background.png" alt=""></img>
                </div>
                <div className="masthead-content-creator-display">
                    <img src="https://picsum.photos/200?random=11242" alt="" />
                    <p>Lego</p>
                </div>
                <div className="masthead-content">
                    <h1>Enchanted Brick Forest</h1>
                    <h2>A collection of fantasy LEGO environments</h2>
                    <p>5 Collections</p>
                    <Link to="/preview/env-8"><button className="yellow-btn">Preview</button></Link>
                </div>        
            </div>
            <Library />
        </div>
     );
}
 
export default Homepage