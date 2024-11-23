import React from 'react';

export default function ShowTasks({ tasklist, setTaskList, task, setTask }) {
  const editTask = (id) => {
    const taskToEdit = tasklist.find(t => t.id === id);
    setTask(taskToEdit); 
  };

  const deleteTask = (id) => {
    setTaskList(tasklist.filter(t => t.id !== id)); 
  };

  const completedTask = (id) => {
    setTaskList(tasklist.map(t => t.id === id ? { ...t, completed: !t.completed } : t)); 
  };

  return (
    <section className="todo-container">
      <div className="todo-header">
        <div>
          <h2>Todo{tasklist.length === 1 ? "" : "s"}</h2>
          <span className="todo-count">{tasklist.length}</span>
        </div>
        <button className="clear-all" onClick={() => setTaskList([])}>Clear All</button>
      </div>

      <div className="todo-list">
        <ul>
          {tasklist.map(task => (
            <li 
              key={task.id} 
              style={{ backgroundColor: task.completed ? "green" : "white" }} 
              className="task-card"
            >
              <div className="task-info">
                <p className="task-title">{task.title}</p>
                <span className="task-timestamp">{task.time + " " + task.date}</span>
              </div>
              <div className="task-actions">
                <button 
                  className="edit" 
                  onClick={() => editTask(task.id)}
                >
                  ✏️
                </button>
                <button 
                  className="delete" 
                  onClick={() => deleteTask(task.id)}
                >
                  🗑️
                </button>
                <button 
                  className="completed" 
                  onClick={() => completedTask(task.id)}
                >
                  ✔️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
