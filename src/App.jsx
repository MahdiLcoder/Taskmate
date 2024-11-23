import React from "react";
import Header from "./Components/Header"; 
import AddTask from "./Components/AddTask";
import ShowTasks from "./Components/ShowTasks";

function App() {
  const [tasklist, setTaskList] = React.useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [task, setTask] = React.useState({ id: null, title: "" });

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasklist)); 
  }, [tasklist]);

  return (
    <>
      <Header />
      <AddTask tasklist={tasklist} setTaskList={setTaskList} task={task} setTask={setTask} />
      <ShowTasks tasklist={tasklist} setTaskList={setTaskList} task={task} setTask={setTask} />
    </>
  );
}

export default App;
