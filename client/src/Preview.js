import Playlist from "./Playlist";

const Preview = () => {
    return ( 
        <div className="preview">
            <div className="preview-cover">
                <img className="preview-cover-background" src="https://picsum.photos/1500/500" alt="" />
                <div className="preview-cover-container">
                    <button className="green-btn">Launch</button>
                    <button className="heart" type="submit"><img src="/Icons/Favorite_Icon.svg" alt="" /></button>
                </div>
            </div>
            <div className="preview-tag">
                <div className="preview-tag-title">
                    <h1>Pokemon GO Relax</h1>
                </div>
                <div className="preview-tag-content">
                    <h2>Toys/Games</h2>
                    <h3>6 Environments</h3>
                </div>
                <div className="preview-tag-description">
                    <p>Explore this official collection of Pokemon environments, from calm forests to tranquil beaches. There’s an environment perfect for you and your Pokemon companions.</p>
                </div>                
            </div>
            <div className="preview-playlist">
                <Playlist />
            </div>
        </div>
     );
}
 
export default Preview