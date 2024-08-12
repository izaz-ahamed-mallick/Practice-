import React from "react";
import PostList from "../Practice/PostList";

const Input = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    return (
        <div className="w-full flex justify-center flex-col">
            <form
                onSubmit={handleSubmit}
                className="mb-4 border-b-2 border-violet-400"
            >
                <input
                    className="border-2 "
                    onChange={handlChange}
                    type="text"
                    placeholder="Enter yout Text"
                />
                <button className="border bg-cyan-200">Search</button>
            </form>
            <PostList />
        </div>
    );
};

export default Input;
