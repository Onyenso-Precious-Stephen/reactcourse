import React, {useState} from "react";


function Colorpicker(){

  const [color, setColor] = useState('#ffffff');

  function handlecolor(event){
    setColor(event.target.value);
  }  


  return(
    <div className="color-picker-container">
      <h1>color picker </h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>select color : {color}</p>
      </div>
      <label>select color :</label>
      <input type="color" value={color} onChange={handlecolor} /> 

    </div>
  );
}

export default Colorpicker;