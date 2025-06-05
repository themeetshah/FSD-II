import React, { useState } from "react";
import "./ToDoList.css"; // Add styles here or inline below

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    const deleteTask = (taskName) => {
        setTasks(tasks.filter(task => task !== taskName));
    };

    const handleToDoList = () => {
        if (text.trim() === '') return;
        setTasks([...tasks, text.trim()]);
        setText('');
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="todo-container">
            <h2>To-Do List</h2>
            <div className="input-group">
                <input
                    type='text'
                    value={text}
                    onChange={handleChange}
                    placeholder="Enter task"
                />
                <button onClick={handleToDoList}>Add</button>
            </div>

            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <span>{task}</span>
                        <button onClick={() => deleteTask(task)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
