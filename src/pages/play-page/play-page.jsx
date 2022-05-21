import "./play-page.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "../../contexts/data-context";
import CountDown from "../../component/countDown/countDown";
import { useState } from "react";
import { useScoreContext } from "../../contexts/score-context";

const PlayPage = () => {

    const [timeEnd, setTimeEnd] = useState(false);
    const [nextQues, setNextQues] = useState(0);
    const [answer, setAnswer] = useState("");

    const { gameName } = useParams();
    let navigate = useNavigate();
    const { dataBasearr } = useDataContext();
    const { dispatchScore } = useScoreContext();

    const specificGame = dataBasearr.find(item => item.gameName === gameName);
    const questionsArr = specificGame.questionAndAnswer[nextQues];

    const changePage = () => {
        setNextQues(nextQues + 1);
        dispatchScore({ type: "ANSWER", payload: answer })
    }

    if(timeEnd || nextQues === 5) {
        navigate(`/result/${gameName}`)
    }

    return (
        <div className="playPage-container margin-small">
            <div className="margin-Xsmall"><CountDown data={{ setTimeEnd }} /></div>
            <div className="questionCount">{nextQues + 1}/5</div>
            <div className="jstfy-centre flex-column align-centre margin-Xsmall">
                <h3>{nextQues + 1}. {questionsArr.question}</h3>
                <div className="option-container jstfy-centre flex-column align-centre">
                    {questionsArr.options.map(item => {
                        return (
                            <button className="options margin-small padding-small"
                                key={item}
                                onClick={() => setAnswer(item)}
                            >{item}</button>
                        )
                    })}
                    <button className="next-btn padding-small"
                        onClick={changePage}
                    >NEXT</button>
                </div>
            </div>
        </div>
    )
}

export default PlayPage;