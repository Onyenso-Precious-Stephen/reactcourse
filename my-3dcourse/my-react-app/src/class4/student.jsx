import styles from "./props.module.css";
import PropTypes from "prop-types";

function Student(props){
  return(
    <div className={styles.student}>
      <p>Name: {props.name}</p>
      <p>age: {props.age}</p>
      <p> student {props.isStudent ? "yes" : "No"}</p>

    </div>
  );

}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}
Student.defaultprops ={
  name: "Guest",
  age: 0,
  isStudnet: false
}

export default Student