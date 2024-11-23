import React from "react"
import Header from "./Components/Header"
import AddTask from "./Components/AddTask"
import ShowTasks from "./Components/ShowTasks"
function App() {
  const [tasklist, setTaskList] = React.useState([])
  return (
    <>
      <Header />
      <AddTask tasklist = {tasklist} setTaskList = {setTaskList}/>
      <ShowTasks tasklist = {tasklist} setTaskList = {setTaskList}/>
    </>
  )
}

export default App
