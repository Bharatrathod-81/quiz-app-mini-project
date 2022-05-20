import "./home-page.css";
import { useDataContext } from "../../contexts/data-context";
import { Link } from "react-router-dom";

const Home = () => {

    const { dataBasearr } = useDataContext();

    return (
        <div className="home-container jstfy-centre align-centre flex-column jstfy-spce-around">
            <h1 className="home-heading">Quiz on Programming Language</h1>
            <div className="card-container jstfy-centre align-centre margin-Xsmall">
                {dataBasearr.map(item => {
                    return (
                        <Link to={`/rules/${item.gameName}`} key={item.gameName} className="card margin-Xsmall" >
                            <img className="program-img margin-small" src={item.image} alt="react img" />
                            <p className="card-text">Quiz on {item.gameName}</p>
                            <small className="card-text">Take this quiz to test yourself!</small>
                            <small className="card-text">5 Question</small>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home; 