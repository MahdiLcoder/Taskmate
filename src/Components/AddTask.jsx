import React from 'react'

export default function AddTask({tasklist, setTaskList}) {
		const addTask = (e) => {
			e.preventDefault()
			const date = new Date();
			const newTask = {
				id: date.getTime(),
				title: e.target[0].value,
				completed: false,
				time: date.toLocaleTimeString(),
				date: date.toLocaleDateString()
			}
			setTaskList([...tasklist, newTask]);
			e.target[0].value = "";
		}
	return (
			<form onSubmit={addTask} className="task-container">
				<input type="text" placeholder="add task" maxLength={50} />
				<button>Add</button>
			</form>
	)
}
