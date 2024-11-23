import React from "react";

export default function AddTask({ tasklist, setTaskList, task, setTask }) {
  const addTask = (e) => {
    e.preventDefault();

    const audio = document.getElementById("audio");

    if (task.id) {
      setTaskList(
        tasklist.map((t) =>
          t.id === task.id ? { ...t, title: task.title } : t
        )
      );
      setTask({ id: null, title: "" });

      audio.play();
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        title: task.title,
        completed: false,
        time: date.toLocaleTimeString(),
        date: date.toLocaleDateString(),
      };
      if (tasklist.find((t) => t.title === newTask.title)) {
        alert("Task already exists");
      } else {
        if (task.title !== "") {
          setTaskList([...tasklist, newTask]);
          setTask({ id: null, title: "" });

          audio.play();
        }
      }
    }
  };

  return (
    <form onSubmit={addTask} className="task-container">
      <audio id="audio" src="public/public_sounds_addTask.mp3"></audio>
      <input
        type="text"
        placeholder="Add task"
        maxLength={50}
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <button>{task.id ? "Update" : "Add"}</button>
    </form>
  );
}
