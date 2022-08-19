import "./play-page.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "../../contexts/data-context";
import CountDown from "../../component/countDown/countDown";
import { useState } from "react";
import { useScoreContext } from "../../contexts/score-context";

const PlayPage = () => {
    const [timeEnd, setTimeEnd] = useState<string>("START");
    const [nextQues, setNextQues] = useState(0);
    const [answer, setAnswer] = useState<string[]>([]);

    const { gameName } = useParams();
    let navigate = useNavigate();
    const { dataBaseArray } = useDataContext();
    const { score : { userName, id}, dispatchScore } = useScoreContext();

    const specificGame = dataBaseArray.find(item => item.gameName === gameName);
    const questionsArr = specificGame?.questionAndAnswer[nextQues];

    const changePage = () => {
        setTimeEnd("NEXT PAGE");
        setNextQues(nextQues + 1);
    }


    if (timeEnd === "END PAGE") {
        changePage();
        setTimeEnd("START");
    } else if (nextQues === 5) {
        dispatchScore({ type: "ANSWER", payload: {id:id,name:userName,answer:answer} })
        navigate(`/result/${gameName}`)
    }

    return (
        <div className="playPage-container margin-small">
            <div className="margin-Xsmall"><CountDown  data={{setTimeEnd,timeEnd}} /></div>
            <div className="questionCount">{nextQues + 1}/5</div>
            <div className="jstfy-centre flex-column align-centre margin-Xsmall">
                <h3>{nextQues + 1}. {questionsArr?.question}</h3>
                <div className="option-container jstfy-centre flex-column align-centre">
                    {questionsArr?.options.map(item => {
                        return (
                            <button className="options margin-small padding-small"
                                key={item}
                                onClick={() => setAnswer(prev => [...prev,item])}
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