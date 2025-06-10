// create a todo list
//import { useState } from "react"
const ToDoList = () => {
    const [t1, setT1] = useState([])
    const [text, setText] = useState('')
    const deleteTeask = (taskName) => {
        setT1(t1.filter((task) => {
            if (task !== taskName) {
                return true
            } else {
                return false
            }
        }))
    }

    function handleToDoList() {
        setT1([...t1, text])
        // setText('')
    }

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <div>
            <input type='text' onChange={handleChange} placeholder="Enter task" />
            <button onClick={handleToDoList}>To Do</button>

            <ul>
                {t1.map((task) => (
                    <li>
                        {task}
                        <button onClick={() => deleteTask(task)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList