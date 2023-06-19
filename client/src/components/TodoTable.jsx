import { useContext } from "react";
import { BsFillTrash3Fill, BsFillPenFill } from "react-icons/bs";
import TodoContext from "../context/TodoContext.jsx";

const TodoTable = (todo) => {
    const { todos } = useContext(TodoContext);
    console.log(todo)
    return (
        <div className="container">
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Todo</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
                <th scope="col">update</th>
                <th scope="col">delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>{todo.todo.name}</td>
                <td>{todo.todo.createdAt}</td>
                <td>{todo.todo.updatedAt}</td>
                <td>
                    <BsFillPenFill />
                </td>
                <td>
                    <BsFillTrash3Fill style={{ color: "red" }} />
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
};

export default TodoTable;