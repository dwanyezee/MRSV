const SecondaryPanel = (props) => {
    const profile = props.profile

    return (
        <div className="secondarypanel">
            <div className="elements">
                <div className="profile-display">
                    <img src={ profile.imageLink }  alt= {`${ profile.name }'s Profile`}/>
                    <div className="profile-name">
                        <h2>Profile Name</h2>
                        <p>{profile.name}</p>
                    </div>
                </div>
                <div className="custom-greeting">
                    <h2>Custom Greeting</h2>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" defaultChecked={ profile.greetingToggle }/>
                        <p className="switch-off">OFF</p>
                        <p className="switch-on">ON</p>
                    </label>
                </div>
                <div className="description">
                    <p className="description-text">{ profile.description }</p>
                </div>
                <div className="button-inputs">
                    <button className="green-btn">Select</button>
                    <button className="red-btn">Remove</button>
                </div>
            </div>
        </div>
     );
}
 
export default SecondaryPanel;