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
        {location.pathname !== "/" &&
            <button className="navbar-button" onClick={ReturnMenu}>
                🡠
            </button>
        }
        {location.pathname !== "/settings" &&
        <Link to="/">
            <button className="navbar-logo">
                <img src="/Icons/MRSVLogo_Icon.svg" alt="" />
            </button>
        </Link>
        }
        {location.pathname !== "/settings" &&
        <Link to="/settings">
            <button className="navbar-profile">
                <img src="https://picsum.photos/200?random=1121242" alt="" />
            </button>
        </Link>
        }
    </div> 
    );
}
 
export default Navbar;