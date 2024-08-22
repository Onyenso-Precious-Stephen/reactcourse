import React, {useState, useEffect, useRef} from "react";

function StopWatch(){
  
  const [isRunning, setisRunning] = useState(false);
  const [elapsTime, setElapstime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimerRef = useRef(0);

  useEffect(() => {

    if(isRunning){
     intervalIdRef.current = setInterval(() =>{
        setElapstime(Date.now() - startTimerRef.current);
      }, 10)

      return() => {
        clearInterval(intervalIdRef.current);
      }
    }
  }, [isRunning])

  function start(){
    setisRunning(true)
    startTimerRef.current = Date.now() - elapsTime; 
    
  }
  function stop(){
    setisRunning(false);

  }
  function restart(){
    setElapstime(0);
    setisRunning(false);

  }
  function farmatTime(){

    let mins = Math.floor(elapsTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsTime / (1000) % 60);
    let milisec = Math.floor(elapsTime % 1000 / 10);

    mins = String(mins).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milisec = String(milisec).padStart(2, "0");

    return `${mins}:${seconds}:${milisec}`

  }
 

  return( 
        <div className="stopwatch">
            <div className="display">{farmatTime()}</div>
            <div className="controls">
              <button onClick={start} className="start-button">start</button>
              <button onClick={stop} className="stop-button">stop</button>
              <button onClick={restart} className="restart-button">restart</button>
            </div>
        </div>
  )

}

export default StopWatch;