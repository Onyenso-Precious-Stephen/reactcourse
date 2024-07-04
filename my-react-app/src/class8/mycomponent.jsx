import React, {useState} from "react";

function Mycomponent(){

  const [name, setName] = useState('Geust');
  const [age, setAge] = useState(0);
  const [isempleyed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("pamima");
  }

  const increaseage = () => {
    setAge(age + 2);
    
  }
  const targetStatus = () => {
    setIsEmployed(!isempleyed);

  }

  return(
    <div>
      <p> Name: {name}</p>

      <button onClick={updateName}> set name </button>

      <p> Age: {age}</p>

      <button onClick={increaseage}> set Age </button>
      
      <p> is Empleyed: {isempleyed ? "yes" : "no"}</p>

      <button onClick={targetStatus}> target status </button>

    </div>
  );

}

export default Mycomponent;