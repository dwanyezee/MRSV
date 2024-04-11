import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Library = (props) => {
    const profileName = "Toy'R'Us";
    const { data: environments, isPending, error } = useFetch("http://localhost:8000/environments");

    return (
        <div className="library">
            <h2 className="library-title">Welcome&nbsp;<strong>{ profileName }</strong>&nbsp;to your MRSV.SPACE demonstration. Please select an experience.</h2>
            <div className="library-list">
                <h1>Experience Library</h1>
                <div className="library-cardlist">
                    {isPending && <div className="library-cardlist">
                        <div className="card loading" /><div className="card loading" /><div className="card loading" /><div className="card loading" />
                        <div className="card loading" /><div className="card loading" /><div className="card loading" /><div className="card loading" />
                    </div>}
                    {environments && environments.map((environment) => (
                        <div className="card" key={ environment.id }>
                            <Link to={ `preview/${environment.id}` }>
                                <img src={ environment.preview_image } alt="avatar" />
                                <div className="card-container">
                                    <h2>{ environment.name }</h2>
                                    <h3>{ environment.tag }</h3>
                                    <h4>6 Environments</h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Library;