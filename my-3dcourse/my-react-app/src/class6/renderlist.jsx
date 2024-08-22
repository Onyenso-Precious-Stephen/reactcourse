import PropTypes from "prop-types"

function Renderlist(props){

  const categary = props.categary;
  const itemList = props.items;

  
  const listItem = itemList.map(item => <li key={item.id}>
                {item.name}: &nbsp;
                <b>{item.calories}</b></li>);


return(
  <>
  <h3>{categary}</h3>
  <ol>{listItem}</ol>
  </>
);

}

Renderlist.propTypes = {
  categary: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                          categary: PropTypes.number}))
}


Renderlist.defaultProps = {
  categary: "categary",
  items: []
}

export default Renderlist;