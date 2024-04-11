import Checkbox from "./Checkbox";
import Playlist from "./Playlist";
import CustomSlider from "./CustomSlider";
import Joystick from "./Joystick";
import mrsvSocket from "./SocketConnection";
import { useEffect } from "react";

const Controller = () => {
    function getData(val) {
        console.log(val);
    }

    /* var socketControls = new mrsvSocket(); */

    // useEffect(() => {
    //     socketControls.Initialize();
    // }, []);

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
                            <CustomSlider colors={"#42D2A7"} hasMarks={false} sliderValue={getData}/>
                        </div>
                        <div className="sliders-weather">
                            <div className="flex">
                                <div>_____________</div>
                                <img className="sliders-icon" src="/Icons/Weather_Icon.svg" alt="" />
                                <div>_____________</div>
                            </div>
                            <div className="flex">
                                <CustomSlider colors={"#4568FB"} markColors={"#FFFFFF"} hasMarks={true} min={0} max={4} step={1} /* sliderValue={socketControls.SetWeatherType} *//>
                                <CustomSlider colors={"#FFFFFF"} hasMarks={false} /* sliderValue={socketControls.SetWeatherIntensity} */ />
                            </div>
                        </div>
                        <div className="sliders-time">
                            <img className="sliders-icon" src="/Icons/Time_Icon.svg" alt="" />
                            <CustomSlider colors={"#FFD72F"} markColors={"#000000"}  /* sliderValue={socketControls.SetTimeOfDay} */ />
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