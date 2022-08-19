import "./result-page.css";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../contexts/data-context";
import { useScoreContext } from "../../contexts/score-context";

const ResultPage = () => {
    const { gameName } = useParams();
    const { dataBaseArray } = useDataContext();
    const { score } = useScoreContext();

    const specificGame = dataBaseArray.find(item => item.gameName === gameName);
    const questionsArr = specificGame?.questionAndAnswer;
    const checkUser = score.usersAns.find(item => item.name === score.userName);
    const totalScore = questionsArr?.filter(item => checkUser?.answer.includes(item.answer));

    return (
        <div>
            <h3>{checkUser?.name}</h3>
            <h3>Your Score is {totalScore?.length} of 5</h3>
            {questionsArr?.map(item => {
                return (
                    <div>
                        <div className="options-container jstfy-centre flex-column align-centre margin-small">
                            <h3>{item.question}</h3>
                            {item.options.map(data => {
                                if (item.answer === data) {
                                    return <div className="correct-result margin-small padding-small" key={data} >{data}</div>
                                } else if (checkUser?.answer.includes(data)) {
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