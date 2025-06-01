import { useContext } from "react"
import { TodoData } from "../context/TodoContext";


const TodoList = ()=>{

    const {todos} = useContext(DataContext);


    return(
        <ul>
            {todos.map(todo=>(
                
                    <TodoItem key={todos.id} todo={todo}/>
                
            ))}
        </ul>
    )
}

export default TodoList;