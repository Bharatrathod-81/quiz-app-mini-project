import "./rule-page.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useScoreContext } from "../../contexts/score-context";

const RulePage = () => {

    const { gameName } = useParams();
    const [value, setValue] = useState("");
    const { dispatchScore } = useScoreContext();

    const userNamefunc = () => {
        dispatchScore({type:"USER NAME", payload:{name:value, id:uuidv4()}});
    }

    return (
        <div className="rule-page-container jstfy-centre align-centre flex-column">
            <label>ENTER YOUR NAME</label>
            <input className="name" onChange={e => setValue(e.target.value)}></input>
            <div className="rule-text  flex-column margin-small">
                <h1 className="margin-Xsmall">Rules</h1>
                <p className="margin-Xsmall">1. There is 5 Question in this Quiz Game</p>
                <p className="margin-Xsmall">2. The Game should be completed in 100 seconds</p>
                <p className="margin-Xsmall">3. Each questions carry 10 marks</p>
                <p className="margin-Xsmall">4. Each questions have three options</p>
                <div className="btn-container padding-small">
                    <Link to={`/play-game/${gameName}`}
                        onClick={userNamefunc}
                        className="start-btn jstfy-centre align-centre">
                        Start Quiz
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default RulePage;