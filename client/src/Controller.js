import Checkbox from "./Checkbox";
import Playlist from "./Playlist";
import Slider from "./slider";
import Joystick from "./Joystick";

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
                    <div className="controller-panel-sliders flex">
                        <div className="sliders-volume">
                            <img className="sliders-icon" src="/Icons/Volume_Icon.svg" alt="" />
                            <Slider colors={"green"} hasMarks={false}/>
                        </div>
                        <div className="sliders-weather">
                            <div className="flex">
                                <div>_____________</div>
                                <img className="sliders-icon" src="/Icons/Weather_Icon.svg" alt="" />
                                <div>_____________</div>
                            </div>
                            <div className="flex">
                                <Slider colors={"blue"} markColors={"white"} hasMarks={true} min={0} max={4} step={1}/>
                                <Slider colors={"white"} hasMarks={false} />
                            </div>
                        </div>
                        <div className="sliders-time">
                            <img className="sliders-icon" src="/Icons/Time_Icon.svg" alt="" />
                            <Slider colors={"yellow"} markColors={"black"} hasMarks={true} min={0} max={3} step={1} />
                        </div>
                    </div>
                    <div className="controller-panel-view">
                        <div className="flex">
                            <div>___________________</div>
                            <img className="sliders-icon" src="/Icons/CameraView_Icon.svg" alt="" />
                            <div>___________________</div>
                        </div>
                        <div className="flex">
                            <div className="controller-panel-view-btns grid">
                                <Checkbox icon={"/Icons/Rotate_Icon.svg"} iconScale={"70%"} />
                                <Checkbox icon={"/Icons/Pan_Icon.svg"} iconScale={"60%"} />
                            </div>
                            <div className="controller-panel-view-joystick">
                                <Joystick />
                            </div>    
                        </div>
                    </div>    
                </div>
            </div>
            <div className="controller-playlist">
                <Playlist />
            </div>
        </div>
     );
}
 
export default Controller;