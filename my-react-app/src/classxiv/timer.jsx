import React, {useState, useEffect} from "react";

function Timer(){

  const [time, settime] = useState(new Date());

  useEffect(() => {

    const intervalId = setInterval(() => {

      settime(new Date());
    }, 1000);

    return() => {
      clearInterval(intervalId);
    }

  },[]);

  function formatTime(){
    let hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    const mederian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${mederian}`

    
  }

  function padZero(number){
    return((number < 10 ? "0" : "") + number);
  }

  return(<>
  <div className="container">

    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  </div>
  
  </>)
}

export default Timer;