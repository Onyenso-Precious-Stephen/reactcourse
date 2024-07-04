
function List(){

  const fruits = [
    {id:1, name: "apple", calories:90},
    {id:2, name: "Mango", calories:45},
    {id:3, name: "orange", calories:99}, 
    {id:4, name: "Grape", calories:200} 
  ];

   fruits.sort((a, b) => a.name.localeCompare(b.name)); // Aphabetically
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reversed aphabetical order
  // fruits.sort((a, b) => a.calories - b.calories); // orderly numerically
  // fruits.sort((b, a) => a.calories - b.calories);


  const listItem = fruits.map(fruit => <li key={fruit.id}>
    {fruit.name}: &nbsp;
    <b>{fruit.calories}</b></li>);

    const lowcals = fruits.filter(fruit => fruit.calories < 100 );

  const secondItem = lowcals.map(lowcal => <li key={lowcal.id}>
    {lowcal.name}: &nbsp;
    <b>{lowcal.calories}</b></li>);

  return( <>
  <ol>{listItem}</ol>
  <ul>{secondItem}</ul>
  </>
);
}

export default List;