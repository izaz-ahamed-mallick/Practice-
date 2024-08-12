import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between h-10 items-center font-semibold mb-3 border-b-2">
            <Link to={"/"}>All</Link>
            <Link to={"/?todo=active"}>Active</Link>
            <Link to={"/?todo=completed"}>Completed</Link>
        </nav>
    );
};

export default Navbar;
