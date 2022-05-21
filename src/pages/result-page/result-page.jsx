import "./result-page.css";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import { useDataContext } from "../../contexts/data-context";
import { useScoreContext } from "../../contexts/score-context";

const ResultPage = () => {
    const { gameName } = useParams();
    // const [totleScore, setTotleScore] = useState(0);
    const { dataBasearr } = useDataContext();
    const { score } = useScoreContext();
    const specificGame = dataBasearr.find(item => item.gameName === gameName);
    const questionsArr = specificGame.questionAndAnswer;
    const totalScore = questionsArr.filter(item => score.usersAns.includes(item.answer));

    return (
        <div>
            <h3>Your Score is {totalScore.length} of 5</h3>
            {questionsArr.map(item => {
                return (
                    <div>
                        <div className="options-container jstfy-centre flex-column align-centre margin-small">
                            <h3>{item.question}</h3>
                            {item.options.map(data => {
                                if (item.answer === data) {
                                    return <div className="correct-result margin-small padding-small" key={data} >{data}</div>
                                } else if (score.usersAns.includes(data)) {
                                    return <div className="wrong-result margin-small padding-small" key={data} >{data}</div>
                                } else {
                                    return <div className="result-option margin-small padding-small" key={data} >{data}</div>
                                }
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default ResultPage;