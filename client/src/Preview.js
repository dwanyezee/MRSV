import { Link, useParams } from "react-router-dom";
import Playlist from "./Playlist";
import Heart from "./Heart";
import useFetch from "./useFetch";

const Preview = () => {
    const { id } = useParams();
    const { data:environment , isPending, error } = useFetch("http://localhost:8000/environments/" + id)

    return ( 
        <div className="preview">
            <div className="preview-cover">
                <img className="preview-cover-background" src={environment && environment.preview_image} alt="" />
                <div className="preview-cover-container">
                    <Link to="/controller"><button className="green-btn">Launch</button></Link>
                    <Heart size="50px" />
                </div>
            </div>
            <div className="preview-tag">
                <div className="preview-tag-title">
                    <h1>{environment && environment.name}</h1>
                </div>
                <div className="preview-tag-content">
                    <h2>{environment && environment.tag}</h2>
                    <h3>6 Environments</h3>
                </div>
                <div className="preview-tag-description">
                    <p>{environment && environment.description}</p>
                </div>                
            </div>
            <div className="preview-playlist">
                <Playlist />
            </div>
        </div>
     );
}
 
export default Preview