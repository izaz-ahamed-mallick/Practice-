import { createContext, ReactNode, useContext, useState } from "react";

interface AddTodo {
    id: number;
    todo: string | number;
    isCompleted: boolean;
    createdAt: Date;
}

interface TodosProviderProps {
    children: ReactNode;
}

export interface TodoProvider {
    todos: AddTodo[];
    handleAddTodo: (task: string | number) => void;
    handleTodoCheck: (id: number) => void;
    handleDelete: (id: number) => void;
}

export const TodoContext = createContext<TodoProvider | null>(null);

const TodoContextProvider = ({ children }: TodosProviderProps) => {
    const [todos, setTodos] = useState<AddTodo[]>(() => {
        const newTodo = localStorage.getItem("todos") || "[]";
        return JSON.parse(newTodo) as AddTodo[];
    });
    const handleAddTodo = (task: string | number) => {
        setTodos((prev) => {
            const newTodo: AddTodo[] = [
                {
                    id: Date.now(), // Generate a unique ID using the current timestamp
                    todo: task,
                    createdAt: new Date(),
                    isCompleted: false,
                },
                ...prev,
            ];
            localStorage.setItem("todos", JSON.stringify(newTodo));
            return newTodo;
        });
    };

    const handleTodoCheck = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                }
                return todo;
            })
        );
    };

    const handleDelete = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider
            value={{ todos, handleAddTodo, handleTodoCheck, handleDelete }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    const todoConsumer = useContext(TodoContext);
    if (!todoConsumer) {
        throw new Error("useTodo must be used within a TodoContextProvider");
    }
    return todoConsumer;
};

export default TodoContextProvider;
