import { useState } from "react";
import "./ToDoPage.css";

export default function ToDoPage() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;

        const task = {
        id: Date.now(),
        text: newTask,
        completed: false,
        };

        setTasks([...tasks, task]);
        setNewTask("");
    };

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
    <section className="todo">
        <h1 className="page-title">To Do List</h1>

        <div className="todo__new-task">
            <input
                type="text"
                placeholder="Add new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="todo__input"
            />
            <button className="todo__button" onClick={addTask}>
                Add
            </button>
        </div>

        <ul className="todo__list">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={`todo__item ${
                    task.completed ? "todo__item--completed" : ""
                    }`}
                >
                    <label className="todo__item-content">
                        <input
                            type="checkbox"
                            className="todo__checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompleted(task.id)}
                        />
                        <span className="todo__text">{task.text}</span>
                    </label>
                </li>
            ))}
        </ul>
        </section>
    );
}