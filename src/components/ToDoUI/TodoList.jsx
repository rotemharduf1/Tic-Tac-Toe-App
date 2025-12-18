import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onToggle }) {
    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
}
