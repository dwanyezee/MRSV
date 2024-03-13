const MainPanel = (props) => {
    const profiles = props.profiles

    return ( 
        <div className="mainpanel">
            <div className="elements">
                <div className="title">
                    <button>🡠</button>
                    <img src="Images/MRSV_Logo.svg" alt="logo" />
                </div>
                <div className="network">
                    <h2>Network Connection</h2>
                    <p>ABABABABABABAB</p>
                </div>
                <div className="zones">
                    <h2>Zone</h2>
                    <select>
                        <option value={ "Mario" }>mario</option>
                        <option value={ "Yoshi" }>Yoshi</option>
                    </select>
                </div>
                <div className="profiles">
                    <h2>profile</h2>
                    {profiles.map((profile) => (
                        <div className="profile-content" key={ profile.id } onClick={() => props.GetProfile(profile.id) }>
                            <img src={ profile.imageLink }  alt= {`${profile.name}'s Profile`} />
                            <p>{ profile.name }</p>
                            <button>...</button>
                        </div>
                    ))}
                </div>
                <div className="profile-add">
                    <button>Add Profile</button>
                </div>
            </div>
        </div>
     );
}
 
export default MainPanel;