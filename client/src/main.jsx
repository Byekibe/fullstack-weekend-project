import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './context/TodoContext.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<TodoProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
</TodoProvider>,
)
