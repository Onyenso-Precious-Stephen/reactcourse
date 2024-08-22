import React, {useState} from "react";

function Counter(){

  const [count, setCount] = useState(0);
  

  const increase = () => {
    setCount(count + 1);
  }
 
  const decrease = () => {
    setCount(count - 1  );
    
  }
  const reset = () => {
    setCount(0);

  }

  return(
    <div className="dev-container">
      <p className="conter">{count}</p>

      <button onClick={increase} className="canter-btn"> Increase </button>
      <button onClick={reset} className="canter-btn"> Reset </button>
      <button onClick={decrease} className="canter-btn"> decrease</button>

    </div>
  );

}

export default Counter;