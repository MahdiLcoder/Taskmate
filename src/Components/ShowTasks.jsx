import React from 'react';

export default function ShowTasks({tasklist, setTaskList}) {

  return (
    <section className="todo-container">
      <div className="todo-header">
        <div>
          <h2>Todo</h2>
          <span className="todo-count">{tasklist.length}</span>
        </div>
        <button className="clear-all" onClick={()=> setTaskList([])}>Clear All</button>
      </div>

      <div className="todo-list">
        <ul>
          {tasklist.map(task => (
            <li key={task.id} className="task-card">
              <div className="task-info">
                <p className="task-title">{task.title}</p>
                <span className="task-timestamp">{task.time + " " + task.date}</span>
              </div>
              <div className="task-actions">
                <button className="edit">✏️</button>
                <button className="delete">🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
