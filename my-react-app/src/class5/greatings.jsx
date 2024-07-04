
function UserGreetings(props){

  if(props.isLoggedin){
    return <h2>wellcome on board{props.userName}</h2>
  }
  else{
    return <h2>please login to continue </h2>
  }
}

export default UserGreetings