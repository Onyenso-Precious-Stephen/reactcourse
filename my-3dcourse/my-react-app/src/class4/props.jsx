import Student from "./student.jsx";


function Props(){

  return(
    <>
    <Student name='Stephen' age={30} isStudent={false} />
    <Student name='Sheryl' age={67} isStudent={true} />

    <Student name='Sharon' age={70}  isStudent={true}/>

    <Student />

     </>
  );

}
export default Props