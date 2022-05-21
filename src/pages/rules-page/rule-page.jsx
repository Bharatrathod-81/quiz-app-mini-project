import "./rule-page.css";
import { Link, useParams } from "react-router-dom";

const RulePage = () => {
    
    const { gameNameId } = useParams();

    return (
        <div className="rule-page-container jstfy-centre align-centre">
            <div className="rule-text  flex-column margin-small">
                <h1 className="margin-Xsmall">Rules</h1>
                <p className="margin-Xsmall">1. There is 5 Question in this Quiz Game</p>
                <p className="margin-Xsmall">2. Every question should complete in 30 seconds</p>
                <p className="margin-Xsmall">3. Each questions carry 10 marks</p>
                <p className="margin-Xsmall">4. Each questions have three options</p>
                <div className="btn-container padding-small">
                <Link to={`/${gameNameId}`} className="start-btn jstfy-centre align-centre">Start Quiz </Link>
                </div>
            </div>
        </div>
    )
};

export default RulePage;