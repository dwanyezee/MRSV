import { useState } from "react";
import Checkbox from "./Checkbox";

const AdditionalOptions = (props) => {
    function OptionMenuPanel() {
        return (
            <div className="additonal-options-menu">
                <h3>Additional Options</h3>
                <div className="additional-options-menu-btns">
                    <button>
                        <img src="/Icons/Gamepad_Icon.svg" alt="" />
                    </button>
                    <button>
                        <img src="/Icons/Eye_Icon.svg" alt="" />
                    </button>
                    <button>
                        <img src="/Icons/Play_Icon.svg" alt="" />
                    </button>
                </div>
            </div>
        );
    }

    return ( 
        <div className="additional-options">
            <button className={props.isActive ? "additional-options-btn-selected" : "additional-options-btn"} onClick={props.showOptions}>
                <img src="/Icons/Options_Icon.svg" alt="" />
            </button>
            {props.isActive && OptionMenuPanel()}
        </div>
     );
}
 
export default AdditionalOptions