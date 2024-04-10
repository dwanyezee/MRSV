import { useState } from "react";

const PlaylistOptions = (props) => {
    const [playlistsItem, setPlaylistItem] = useState([
        {name : "My Fav Beaches", environmentCount: 8, id: 12138 },
        {name : "My Fav Beaches", environmentCount: 2, id: 2523 },
        {name : "My Fav Beaches", environmentCount: 4, id: 33235 },
        {name : "My Fav Beaches", environmentCount: 5, id: 4432 },
    ])
    
    function OptionMenuPanel() {
        return (
            <div className="playlist-options-menu">
                <h3>Add to Playlist</h3>
                <input type="text" placeholder="Search" />
                <div className="playlist-options-menu-container">
                    {playlistsItem.map((playlist) => (
                        <button className="playlist-options-menu-item" key={ playlist.id }>
                            <div className="playlist-options-menu-content">
                                <h2>{ playlist.name }</h2>
                                <h2>{ playlist.environmentCount }</h2>
                            </div>
                        </button>
                    ))}
                    
                </div>
                <div className="playlist-options-menu-btns">
                    <button className="blue-btn">New Playlist</button>
                    <button className="red-btn" onClick={props.showOptions} >Cancel</button>
                </div>
            </div>
        );
    }

    return ( 
        <div className="playlist-options">
            <button className={props.isActive ? "additional-options-btn-selected" : "additional-options-btn"} onClick={props.showOptions}>
                <img src="/Icons/PlaylistAdd_Icon.svg" alt="" />
            </button>
            {props.isActive && OptionMenuPanel()}
        </div>
     );
}
 
export default PlaylistOptions