import { useTimer } from 'use-timer';
import React, { useEffect } from 'react';

type SetState = "START" | "END PAGE" | "NEXT PAGE";

type PropsType = {
    data: {
        setTimeEnd:React.Dispatch<SetState>;
        timeEnd: string;
    }
};

const CountDown = ({ data }: PropsType) => {

    const { setTimeEnd,timeEnd } = data;
    const { time, start, reset } = useTimer({
        initialTime: 20,
        endTime: 0,
        timerType: "DECREMENTAL",
        onTimeOver: () => {
            setTimeEnd("END PAGE")
            start();
        }
    });

    useEffect(() => {
        start();
    }, [start]);
    
    useEffect(() => {
        if (timeEnd === "NEXT PAGE"){
            setTimeEnd("START")
            reset();
            start();
        };
    },[timeEnd])





    return (
        <div>
            <div style={{ fontSize: "22px" }}>Time Limit {time}
                <span>
                    {time % 2 === 0 ?
                        <i className="fa fa-hourglass-start"></i>
                        :
                        <i className="fa fa-hourglass-end"></i>
                    }
                </span>
            </div>
        </div>
    )
}

export default CountDown;