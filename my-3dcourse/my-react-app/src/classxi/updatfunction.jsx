import react, { useState } from "react";
import Bigcompontent from "./mycomponect";

function Updatecomponent(){

  const [car, setCar] = useState({year:2024, 
                                  make:"toyota",
                                  model:"camary"})

  function handleyear(event){
    setCar(c => ({...c, year:event.target.value}));
  }
  function handlemake(event){
    setCar(c => ({...c, make:event.target.value}));
  }
  function handlemodel(event){
    setCar(c => ({...c, model:event.target.value}));
  }


  return(
    <>
    <Bigcompontent />

    <div>

      <h3>i will buy this car {car.model}, make : {car.make}, year: {car.year}</h3>
      <input type="number" value={car.year} onChange={handleyear}/><br />
      <input type="text" value={car.make} onChange={handlemake}/><br />
      <input type="text" value={car.model} onChange={handlemodel}/><br />
      
    </div>
    </>
  )
}
export default Updatecomponent;
