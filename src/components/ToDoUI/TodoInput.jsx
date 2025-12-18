export default function TodoInput({
    inputRef,
    value,
    onChange,
    onAdd,
}) {
    return (
        <div className="todo-new-task">
            <input
                ref={inputRef}
                type="text"
                placeholder="Add new task"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="todo-input"
            />
            <button className="todo-button" onClick={onAdd}>
                Add
            </button>
        </div>
    );
}
