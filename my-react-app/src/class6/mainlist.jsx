import List from "./list.jsx";
import Renderlist from "./renderlist.jsx";

function Mainlist(){


  const fruits = [
    {id:1, name: "apple", calories:90},
    {id:2, name: "Mango", calories:45},
    {id:3, name: "orange", calories:99}, 
    {id:4, name: "Grape", calories:200} 
  ];
  const vegetable = [
    {id:1, name: "potato", calories:90},
    {id:2, name: "celary", calories:125},
    {id:3, name: "abacha", calories:98}, 
    {id:4, name: "uguleaf", calories:200} 
  ];


  return(
    <>
    {vegetable.length > 0 ? <Renderlist items={vegetable} categary="vegetables"/> : null }
    {fruits.length > 0 && <Renderlist items={fruits} categary="fruits"/>}
    <hr />
    <List />
    
    


    </>
  );
}

export default Mainlist;
