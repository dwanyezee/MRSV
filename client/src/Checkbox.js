const Checkbox = (props) => {
    const icon = props.icon;
    const iconScale = props.iconScale;

    const iconStyle = {
        width: iconScale,
        height: iconScale,
    };

    return ( 
        <label className="switch-2">
            <input type="checkbox" />
            <div className="toggle-2-container">
                <span className="toggle-2" />
                <img className="toggle-img-2" style={iconStyle} src={icon} alt="" />
            </div>
            
        </label>
     );
}
 
export default Checkbox;