import React, {useState, useEffect} from "react";

function Mycounter(){

  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `count : ${count}`
  });


  function Addone(){
    setcount(c => c + 1);
  }

  function Subtract(){
    setcount(c => c - 2);
  }

  return(<>
  <h3> counter : {count} </h3>

  <button onClick={Addone}>Add</button>
  <button onClick={Subtract}>Subtract 2</button>
  </>)

}

export default Mycounter;