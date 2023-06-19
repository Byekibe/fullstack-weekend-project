import { useContext } from 'react';
import TodoContext from './context/TodoContext.jsx';
import './App.css'
import Spinner from './components/Spinner.jsx';
import TodoTable from './components/TodoTable.jsx';

function App() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {
        todos === null ? <Spinner /> : 
        (
          todos.map(todo => (
            <TodoTable todo={todo} key={crypto.randomUUID()} />
          ))
        )
      }
    </>
  )
}

export default App
