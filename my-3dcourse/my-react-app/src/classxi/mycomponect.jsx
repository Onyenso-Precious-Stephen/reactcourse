import react, {useState} from 'react'

function Bigcompontent(){

  const [food, setfood] = useState(['rice', 'miomio', 'cake', 'fruits']);

  function handleaddfood(){

    const newfood = document.getElementById('inputfood').value;
    
    document.getElementById('inputfood').value = "";

    setfood(f => [...f, newfood]);
  }
  
  function handleremovefood(index){

    setfood(food.filter((_, i) => i !== index));
    
  }

  return(<div>
    <h3>list of food in Nigeria my fathers land</h3>
      <ul>
        {food.map((food, index) => <li key={index} onClick={() => {handleremovefood(index)}}>{food}</li>)}
      </ul>
      <input type="text" id='inputfood' placeholder='Enter your food' />
      <button onClick={handleaddfood}>Add Food</button>

  </div> )
}

export default Bigcompontent;