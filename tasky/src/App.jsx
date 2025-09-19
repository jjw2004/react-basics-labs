import './App.css';
import Task from './components/Task';
import AddTaskForm from './components/Form';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // Initialize state with an array of task objects
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", priority: "medium", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "low", done: false },
      { id: 3, title: "Tidy up", description: "Clean living room", deadline: "Today", priority: "high", done: false }
    ]
  });

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "medium"
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  }

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      case "priority":
          form.priority = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }

  console.log(formState);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
  }


  return (
    <div className="container">
      <h1>Tasky</h1>
      {/* Map through tasks array and render a Task component for each task */}
      {taskState.tasks.map((task, index) => (
        <Task 
          key={task.id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask={() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );
}

export default App;
