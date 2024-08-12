import React, { FormEvent, useState } from "react";
import { useTodo } from "../Store/ContextTodo";

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const [error, setError] = useState(false);
    const { handleAddTodo } = useTodo();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!todo && todo.length < 1) {
            return setError(true);
        }
        setError(false);
        handleAddTodo(todo);
        setTodo("");
    };
    return (
        <div className="w-full flex justify-center flex-col">
            <form onSubmit={handleFormSubmit} className="flex w-full">
                <input
                    className="flex-1 border p-2 outline-none rounded-lg "
                    type="text"
                    placeholder="Write your todo.."
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className="bg-green-500 px-4 rounded-lg font-semibold">
                    Add
                </button>
            </form>
            {error && <p className="text-red-400">Please Write your todo</p>}
        </div>
    );
};

export default AddTodo;
