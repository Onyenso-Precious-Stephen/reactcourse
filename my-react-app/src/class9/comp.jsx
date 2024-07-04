import React, {useState} from "react";

function Acomponent(){

  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("delivery");

  const changename = (event) =>{
    setName(event.target.value);
  }
  function changequantity(event){
    setQuantity(event.target.value)
  }
  function handlecomment(event){
    setComment(event.target.value);
  }
  function handlepayment(event){
    setPayment(event.target.value);
  }
  function handleshipping(event){
    setShipping(event.target.value);
  }



  return(
    <div>
      <input value={name} type="text" onChange={changename} />
      <p>Name: {name}</p>

      <input value={quantity} type="number" onChange={changequantity} />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} type="text" onChange={handlecomment} 
      placeholder="write what you feel"/>
      <p>Comment : {comment}</p>

      <select value={payment} onChange={handlepayment}>
        <option value="">select an option</option>
        <option value="visa"> Visa</option>
        <option value="mastcard"> mastcard</option>
        <option value="giftcard">giftcard</option>
      </select>
        <p>Payment method : {payment}</p>

        <label>
          <input type="radio" value="delivery"
                    checked={shipping === "delivery"}
                    onChange={handleshipping}/>
                    delivery
        </label><br />
        <label>
          <input type="radio" value="pick up"
                    checked={shipping === "pick up"}
                    onChange={handleshipping}/>
                    pick up
        </label>

        <p>shipping : {shipping}</p>


    </div>
  );

}

export default Acomponent