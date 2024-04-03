import { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    const profileName = "Toy'R'Us"
    const [environments, setEnvironments] = useState([
        { imageLink: 'https://picsum.photos/200?random=1', name: "Toy'R'Us", type: "Toys/Games", id: 1},
        { imageLink: 'https://picsum.photos/200?random=2', name: "Toy'R'Us", type: "Toys/Games", id: 2},
        { imageLink: 'https://picsum.photos/200?random=3', name: "Toy'R'Us", type: "Toys/Games", id: 3},
        { imageLink: 'https://picsum.photos/200?random=4', name: "Toy'R'Us", type: "Toys/Games", id: 4},
        { imageLink: 'https://picsum.photos/200?random=5', name: "Toy'R'Us", type: "Toys/Games", id: 5},
        { imageLink: 'https://picsum.photos/200?random=6', name: "Toy'R'Us", type: "Toys/Games", id: 6},
        { imageLink: 'https://picsum.photos/200?random=7', name: "Toy'R'Us", type: "Toys/Games", id: 7},
    ])
    
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
                    <Link to="/preview"><button className="yellow-btn">Preview</button></Link>
                </div>        
            </div>
            <div className="library">
                <h2 className="library-title">Welcome&nbsp;<strong>{ profileName }</strong>&nbsp;to your MRSV.SPACE demonstration. Please select an experience.</h2>
                <div className="library-list">
                    <p>Experience Library</p>
                    <div className="library-cardlist">
                        {environments.map((environment) => (
                            <div className="card" key={ environment.id }>
                                <img src={ environment.imageLink } alt="avatar" />
                                <div className="card-container">
                                    <h2>{ environment.name }</h2>
                                    <h3>{ environment.type }</h3>
                                    <h4>6 Environments</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Homepage