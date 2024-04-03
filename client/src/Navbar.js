import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    let location = useLocation();

    return ( 
    <div className="navbar">
        {location.pathname === "/" ? null :
        <Link to="/">
            <button className="navbar-button">
                🡠
            </button>
        </Link>
        }
        <Link to="/">
            <button className="navbar-logo">
                <img src="Icons/MRSVLogo_Icon.svg" alt="" />
            </button>
        </Link>
        <Link to="/settings">
            <button className="navbar-profile">
                <img src="https://picsum.photos/200?random=1121242" alt="" />
            </button>
        </Link>
    </div> 
    );
}
 
export default Navbar;