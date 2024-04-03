const Heart = (props) => {
    const size = props.size;

    return ( 
        <label className="heart" style={{width: size}}>
            <input type="checkbox" />
            <img className="heart-select" style={{width: size}} src="/Icons/FavoriteSelected_Icon.svg" alt="" />
            <img className="heart-unselect" style={{width: size}} src="/Icons/Favorite_Icon.svg" alt="" />
        </label>
     );
}
 
export default Heart;