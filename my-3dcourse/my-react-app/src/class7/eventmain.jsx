
function Bigbutton(){

  const clickbutton = (e) => e.target.textContent = "okey mi lord";

  return(
    <button onClick={(e) => clickbutton(e)}> click me </button>
  );

}

export default Bigbutton;