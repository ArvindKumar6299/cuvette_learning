
import './App.css'
import TodoItem from './components/TodoItem'
import TodoContext, { TodoProvider } from './context/TodoContext'

function App() {


  return (
   <TodoContext>
    <div className="app" style={{padding: "20px"}}>
      <h1>Todo List App</h1>
      <TodoForm/>
      <TodoList/>
      <TodoItem/>
    </div>
   </TodoContext>
  )
}

export default App
