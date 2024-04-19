import { useState } from "react";
import { UseNotification } from "./NotificationProvider"
import { useNavigate } from "react-router-dom";

const PlaylistCreate = (props) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const dispatch = UseNotification();

    const HandleSubmit = (e) => {
        e.preventDefault();
        const playlist = { title, category, description, environments_id : [], preview_image: "https://picsum.photos/500?random"}

        setIsPending(true);

        fetch("http://localhost:8000//playlists/create", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(playlist)

        }).then(() => {
            console.log("New Playlist Added");
            setIsPending(false);
            props.playlistCreate();
            dispatch({
                type: "SUCCESS",
                message: "Playlist Successfully Created!"
            })
            navigate("/");

        }).catch((err) => {
            setIsPending(false);
            console.error(err.message);
            dispatch({
                type: "ERROR",
                message: "There was an error in processing your request - " + err.message
            })
            
        });
    }

    return ( 
        <div className="playlist-create">
            <div className="background-blur" />
            <div className="playlist-create-container">
                <h1 className="playlist-create-title">New Playlist</h1>
                <img className="playlist-create-thumbnail" src="/Images/Lake.png" alt="" />
                <form className="playlist-create-form" id="CreatePlaylist" onSubmit={HandleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Playlist Title" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <input 
                    type="text" 
                    placeholder="Category" 
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    />
                    <textarea 
                    placeholder="Description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </form>
                <div className="playlist-create-form-btns">
                    <button type="submit" form="CreatePlaylist" className="green-btn" disabled={isPending}>{!isPending ? <p>Save</p> : <p>Saving...</p>}</button>
                    <button className="red-btn" onClick={props.playlistCreate}>Cancel</button>
                </div>
            </div>
        </div>
     );
}
 
export default PlaylistCreate;