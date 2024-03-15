import { useState } from "react";

const Playlist = () => {
    const [playlists, setPlaylists] = useState([
        { imageThumbnailLink: "https://picsum.photos/200?random=1", playlistName: "Emerald Range", type: "Toys/Games", authorName: "Pokemon Company", likes: 242335, id: 1 },
        { imageThumbnailLink: "https://picsum.photos/200?random=2", playlistName: "Emerald Range", type: "Toys/Games", authorName: "Pokemon Company", likes: 9013290, id: 2 },
        { imageThumbnailLink: "https://picsum.photos/200?random=3", playlistName: "Emerald Range", type: "Toys/Games", authorName: "Pokemon Company", likes: 123, id: 3 },
        { imageThumbnailLink: "https://picsum.photos/200?random=4", playlistName: "Emerald Range", type: "Toys/Games", authorName: "Pokemon Company", likes: 2315, id: 4 },
        { imageThumbnailLink: "https://picsum.photos/200?random=5", playlistName: "Emerald Range", type: "Toys/Games", authorName: "Pokemon Company", likes: 65, id: 5 },
        { imageThumbnailLink: "https://picsum.photos/200?random=6", playlistName: "Emerald Range", type: "Toys/Games", authorName: "Pokemon Company", likes: 24235, id: 6 },
        { imageThumbnailLink: "https://picsum.photos/200?random=7", playlistName: "Emerald Range", type: "Toys/Games", authorName: "Pokemon Company", likes: 6865, id: 7 },
        { imageThumbnailLink: "https://picsum.photos/200?random=8", playlistName: "Emerald Range", type: "Toys/Games", authorName: "Pokemon Company", likes: 3235, id: 8 },
    ])

    return ( 
    <div className="playlist">
        {playlists.map((playlist) => (
            <div className="playlist-card" key={ playlist.id }>
                <div className="playlist-card-details">
                    <img className="playlist-card-thumbnail" src={ playlist.imageThumbnailLink } alt="" />
                    <div className="playlist-card-content">
                        <h1>{ playlist.playlistName }</h1>
                        <h2>{ playlist.type }</h2>
                        <div className="playlist-card-content-name">
                            <img src="https://picsum.photos/200?random=2" alt="" />
                            <h3>{ playlist.authorName }</h3>
                        </div>
                    </div>
                </div>
                <div className="playlist-card-btns">
                    <div className="playlist-card-btns-likes">
                        <h4>{ playlist.likes }</h4>
                        <img src="/Icons/FavoriteSelected_Icon.svg" alt="" />
                    </div>
                    <div className="playlist-card-btns-others">
                        <img src="/Icons/PlaylistAdd_Icon.svg" alt="" />
                        <img src="/Icons/Options_Icon.svg" alt="" />
                    </div>
                </div>        
            </div>
        ))}

        
        
    </div>
    );
}
 
export default Playlist