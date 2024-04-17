import useFetch from "./useFetch";

const PlaylistOptions = (props) => {

    const { data } = useFetch("http://localhost:8000/playlists")
    
    function OptionMenuPanel() {
        return (
            <div className="playlist-options-menu">
                <h3>Add to Playlist</h3>
                <input type="text" placeholder="Search" />
                <div className="playlist-options-menu-container">
                    {data.map((playlist) => (
                        <button className="playlist-options-menu-item" key={ playlist.id }>
                            <div className="playlist-options-menu-content">
                                <h2>{ playlist.title }</h2>
                                <h2>{ playlist.environments_id.length }</h2>
                            </div>
                        </button>
                    ))}
                    
                </div>
                <div className="playlist-options-menu-btns">
                    <button className="blue-btn" onClick={props.playlistCreate}>New Playlist</button>
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