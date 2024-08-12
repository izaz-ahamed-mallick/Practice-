import React from "react";
import { useTodo } from "../Store/ContextTodo";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
    const { todos, handleTodoCheck, handleDelete } = useTodo();
    const [searchParams] = useSearchParams();

    const queryParams = searchParams.get("todo");

    let filterData = todos;

    if (queryParams === "active") {
        filterData = filterData.filter((todo) => !todo.isCompleted);
    }
    if (queryParams === "completed") {
        filterData = filterData.filter((todo) => todo.isCompleted);
    }

    return (
        <div className="w-full">
            <ul className="w-full">
                {filterData.map((todo) => (
                    <li
                        key={todo.id}
                        className={`justify-between
                         flex items-center  px-3 h-14 shadow-2xl my-2 bg-green-50`}
                    >
                        <div className="flex justify-between w-1/2">
                            <input
                                type="checkbox"
                                id={`todo-${todo.id}`}
                                checked={todo.isCompleted}
                                onChange={() => handleTodoCheck(todo.id)}
                            />
                            <label
                                htmlFor={`todo-${todo.id}`}
                                className={` text-lg ${
                                    todo.isCompleted &&
                                    "line-through text-red-500"
                                }`}
                            >
                                {todo.todo}
                            </label>
                        </div>
                        {todo.isCompleted && (
                            <button
                                className="bg-red-500 px-4 py-1 text-white rounded-md"
                                onClick={() => handleDelete(todo.id)}
                            >
                                Delete
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
