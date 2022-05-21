
import { useEffect, useState } from "react";

var counterId;
const CountDown = ({data}) => {

    const [time, setTime] = useState(0);
    const { setTimeEnd } = data;

    useEffect(() => {
        counterId = setInterval(() => {
            setTime(pre => pre + 1);
        }, 1000)
        if (counterId%2 !== 0) {
            clearInterval(counterId)
        }
    },[]);

    if (time === 100  ) {
        clearInterval(counterId);
        setTimeEnd(true)
    };

    return (
        <div>
            <div style={{fontSize:"22px"}}>Time Limit {time}
                <span>
                     {time % 2 === 0 ? <i className="fa fa-hourglass-start"></i> : <i className="fa fa-hourglass-end"></i>}
                </span>
            </div>
        </div>
    )
}

export default CountDown;