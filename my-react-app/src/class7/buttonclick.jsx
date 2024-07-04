
function Buttonevent(){

  let cont = 0;

  const handleclick = () => console.log('pain is love boss');

  const handleclick2 = (name) => console.log(`${name} stop clicking boss`)

  const handleclick3 = (name) => {

    if(cont < 4 ){

      cont++;
    console.log(`${name} clicked  ${cont} time/s`);
  } else {
    console.log(`${name} stop clicking me boss`);
  }

  }
  return(
    <>
    <button onClick={handleclick}> click me </button>
    <br />
    <button onClick={() => handleclick2('bro')}> click me </button>

    <button onClick={() => handleclick3('bro')}> click me </button>



    </>
  )

}

export default Buttonevent;