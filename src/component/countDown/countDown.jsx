import { useTimer } from 'use-timer';
import { useEffect } from 'react';

const CountDown = ({ data }) => {
    
    const {setTimeEnd } = data;
    const { time, start,reset } = useTimer({
        initialTime: 20,
        endTime: 0,
        timerType: "DECREMENTAL",
        onTimeOver: () => { 
            setTimeEnd("END PAGE")
            start();
        }
      });
    
      useEffect(()=>{
        start();
      }, [start])

      setTimeEnd(prev => {
          if (prev === "NEXT PAGE") {
              reset();
              start();
          }
      })
    

      console.log(time)

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