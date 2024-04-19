import { useState } from "react";
import MainPanel from "./MainPanel";
import SecondaryPanel from "./SecondaryPanel";

const Settings = () => {
    const [profiles] = useState([
        { imageLink: 'https://picsum.photos/200?random=1', name: "Toy'R'Us", greetingToggle: true , description: "Lorem Ipsum asdudnawadnwaudnawkjdaskn a sknd awdjk akdna ka....." , id: 1 },
        { imageLink: 'https://picsum.photos/200?random=2', name: "Nintendo", greetingToggle: false , description: "Lorem Ipsum2....." , id: 2 },
        { imageLink: 'https://picsum.photos/200?random=3', name: "Cool Japan", greetingToggle: true , description: "Lorem Ipsum3d adwjnda dkwajnw....." , id: 3 },
    ])

    const [currentProfile, setCurrentProfile] = useState(profiles.find((profile) => profile.id === 1))

    function GetProfile(id) {
        setCurrentProfile(profiles.find((profile) => profile.id === id));
    }


    return ( 
        <div className="settings">
            <MainPanel profiles={profiles} GetProfile={GetProfile}/>
            <SecondaryPanel profile={currentProfile} />
        </div>
     );
}
 
export default Settings;