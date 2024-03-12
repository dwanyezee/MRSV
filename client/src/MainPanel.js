const MainPanel = () => {
    return ( 
        <div className="mainpanel">
            <div className="elements">
                <div className="title">
                    <button>🡠</button>
                    <img src="Images/MRSV_Logo.svg" />
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
                    <ul>
                        <li>
                            <div className="profile-content">
                                <img src="https://picsum.photos/200?random=1" />
                                <p>Toy'R'Us</p>
                            </div>
                            <button>...</button>
                        </li>
                        <li>
                            <div className="profile-content">
                                <img src="https://picsum.photos/200?random=2" />
                                <p>Nintendo</p>
                            </div>
                            <button>...</button>
                        </li>
                        <li>
                            <div className="profile-content">
                                <img src="https://picsum.photos/200?random=3" />
                                <p>Cool Japan</p>
                            </div>
                            <button>...</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default MainPanel;