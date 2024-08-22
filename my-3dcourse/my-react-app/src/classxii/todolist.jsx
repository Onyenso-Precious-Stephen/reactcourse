import react, {useState} from "react";

function Todolist(){

  const [tasks, settasks] = useState(["execise everyday", "read everyday", "plan for the day", "pray"]);

  const [newTask, setnewTask] = useState("");

  function handleInputChange(event){
      setnewTask(event.target.value)
  }

  function handleAddTask(){

    if(newTask.trim() !== ""){
     
      settasks(t => [...t, newTask])
      setnewTask("")
  
    }
    
  }

  function handleRemoveTask(index){

    const updatedtask = tasks.filter((_, i) => i !== index );

    settasks(updatedtask);
  }

  function moveTaskUP(index){
    if(index > 0){
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index - 1]] = 
      [updatedtasks[index - 1], updatedtasks[index]];
      settasks(updatedtasks);

    }

  }

  function moveTaskdown(index){
    if(index < tasks.length - 1){
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index + 1]] = 
      [updatedtasks[index + 1], updatedtasks[index]];
      settasks(updatedtasks);

    }

  }

  return(
    <div className="to-do-list">
      <h2>To-do list</h2>

      <div>
        <input type="text"
               placeholder="enter Task..."
               value={newTask} 
               onChange={handleInputChange}/>

        <button 
          className="btn-add-task"
          onClick={handleAddTask}>
          add task
        </button>

        <ol>
          {tasks.map((task, index) => 
            <li key={index}>
              <span className="text">{task}</span>
              <button 
                  className="delete-btn"
                  onClick={() => handleRemoveTask(index)}
              >Delete</button>
               <button 
                  className="move-btn"
                  onClick={() => moveTaskUP(index)}
              >Up</button>
               <button 
                  className="move-btn"
                  onClick={() => moveTaskdown(index)}
              >Down</button>

            </li>        
        )}
        </ol>
      </div>
    </div>
  )

}

export default Todolist;