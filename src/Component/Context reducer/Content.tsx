import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { log } from "console";

const Content = () => {
    console.log("render");

    const [size, setSize] = useState<number | null>(null);
    const { dispatch, state } = useContext(ThemeContext);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: "CHANGE-SIZE", payload: size });
    };
    return (
        <div
            className={`h-screen w-screen ${
                state.theme === "dark"
                    ? "bg-black text-white"
                    : "bg-white text-black"
            }`}
        >
            <h1
                style={{ fontSize: `${state.fontSize}px` }}
                className={`text-center my-4 h-20`}
            >
                Hello Change Text..
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setSize(parseInt(e.target.value))}
                    className="border "
                    type="number"
                    placeholder="enter your font size"
                />
                <button className="ml-2 border-2 border-black px-2">
                    Font Change
                </button>
            </form>
            <button
                onClick={() => dispatch({ type: "CHANGE-THEME" })}
                className="border my-3 px-3 "
            >
                Theme Change
            </button>
        </div>
    );
};

export default Content;
