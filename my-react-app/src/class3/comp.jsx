// Making a reuseable component 

import Button from "./button.jsx";
import Buttono from "./button2.jsx";

function Comp(){
  return (
    <>
    <Button />
    <br />
    <hr />
    <Buttono />
    </>
  );
}

export default Comp;