import Playlist from "./Playlist";

const Controller = () => {
    return ( 
        <div className="Controller">
            <div className="controller-main">
                <img className="preview-cover-background blur" src="https://picsum.photos/1500/500" alt="" />
                <div className="controller-main-name">
                    <h1>Pokemon GO Relax</h1>
                    <div className="controller-main-content">
                        <h2>Toys/Games</h2>
                        <h3>6 Environments</h3>
                    </div>
                </div>
                <div className="controller-panel">
                    <button className="controller-panel-btn">a</button>
                    <button className="controller-panel-btn">a</button>
                    <button className="controller-panel-btn">a</button>
                    <button className="controller-panel-btn">a</button>
                    <button className="controller-panel-btn">a</button>
                    <button className="controller-panel-btn">a</button>
                    <button className="controller-panel-btn">a</button>
                </div>
            </div>
            <div className="controller-playlist">
                <Playlist />
            </div>
        </div>
     );
}
 
export default Controller;