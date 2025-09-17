import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  // Initialize state with an array of task objects
  const [taskState, setTaskState] = useState({
    tasks: [
      { title: "Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", deadline: "Today" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {/* Map through tasks array and render a Task component for each task */}
      {taskState.tasks.map((task, index) => (
        <Task 
          key={index}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
        />
      ))}
    </div>
  );
}

export default App;
