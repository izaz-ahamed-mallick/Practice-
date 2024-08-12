import React from "react";
import { dataType } from "./PostList";

const PostCard = ({ title, body, id }: dataType) => {
    const handleDelete = (id: number) => {
        console.log(id);
    };
    return (
        <div>
            <h1>PostCard</h1>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p>{body}</p>
            <button
                onClick={() => handleDelete(id)}
                className="bg-red-400 my-2"
            >
                Delete
            </button>
        </div>
    );
};

export default PostCard;
