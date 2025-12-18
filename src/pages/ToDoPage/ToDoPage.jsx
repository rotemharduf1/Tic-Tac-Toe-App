import { useState, useEffect, useMemo, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ToDoPage.css";

import PageTitle from "../../components/PageTitle/PageTitle";
import TodoInput from "../../components/ToDoUI/TodoInput";
import TodoList from "../../components/ToDoUI/TodoList";

export default function TodoPage() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const inputRef = useRef(null);

    const hasCompletedTasks = useMemo(
        () => tasks.some((task) => task.completed),
        [tasks]
    );

    useEffect(() => {
        try {
            const storedTasks = localStorage.getItem("tasks");
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (isLoading) return;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks, isLoading]);

    useEffect(() => {
        if (!isLoading) {
            inputRef.current?.focus();
        }
    }, [isLoading]);

    const addTask = () => {
        if (isLoading || taskInput.trim() === "") return;

        setTasks((prev) => [
            ...prev,
            {
                id: uuidv4(),
                text: taskInput,
                completed: false,
            },
        ]);

        setTaskInput("");
        inputRef.current?.focus();
    };

    const toggleTaskCompleted = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const clearCompletedTasks = () => {
        setTasks((prev) => prev.filter((task) => !task.completed));
    };

    const content = isLoading ? (
        <div className="todo-loading">Loading...</div>
    ) : (
        <>
            <TodoInput
                inputRef={inputRef}
                value={taskInput}
                onChange={setTaskInput}
                onAdd={addTask}
            />

            <TodoList
                tasks={tasks}
                onToggle={toggleTaskCompleted}
            />

            {hasCompletedTasks && (
                <button
                    className="todo-button todo-clear-button"
                    onClick={clearCompletedTasks}
                >
                    Clear completed tasks
                </button>
            )}
        </>
    );

    return (
        <section className="page-container">
            <div className="todo-page">
                <PageTitle>To Do List</PageTitle>
                {content}
            </div>
        </section>
    );
}
