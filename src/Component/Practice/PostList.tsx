import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

export interface dataType {
    id: number;
    title: string;
    body: string;
}

const PostList = () => {
    const [data, setData] = useState<dataType[]>([]);
    const getData = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data: dataType[] = await response.json();

            setData(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        data && (
            <div>
                {data.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        )
    );
};

export default PostList;
