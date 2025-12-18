export default function TodoItem({ task, onToggle }) {
    return (
        <li
            className={`todo-item ${
                task.completed ? "todo-item-completed" : ""
            }`}
        >
            <label className="todo-item-content">
                <input
                    type="checkbox"
                    className="todo-checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                <span className="todo-text">{task.text}</span>
            </label>
        </li>
    );
}
