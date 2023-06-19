import { useState, createContext, useEffect } from "react";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(null);

    const url = "http://localhost:7000/todo"

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log(data)
                setTodos(data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, [])

    const value = {
        todos
    };

    return (
        <TodoContext.Provider value={value}>
            { children }
        </TodoContext.Provider>
    )
};


export { TodoProvider };
export default TodoContext;