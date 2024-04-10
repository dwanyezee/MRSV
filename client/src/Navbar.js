import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();

    function ReturnMenu()
    {
        navigate(-1);
    }

    return ( 
    <div className="navbar">
        {location.pathname === "/" ? null :
            <button className="navbar-button" onClick={ReturnMenu}>
                🡠
            </button>
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