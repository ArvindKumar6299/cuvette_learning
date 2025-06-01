import { useContext } from "react";
import { TodoData } from "../context/TodoContext";


const TodoItem = ()=>{
    const {dispatch} = useContext(TodoData);
     
    const [newText , setNewText] = useState('');
     
    const handleDelete = ()=>{
        dispatch({type:"REMOVE_TODO"})
    };
    const handleEdit = ()=>{
        dispatch({type:"EDIT_TODO"})
    }

    return(
        <li>
            {TodoItem.isEditing ? (
            <form onSubmit={handleEdit}>
                <input type="text" value={newText} onChange={(e)=>{setNewText(e.target.value)}}/>

                <button type="submit">Save</button>
            </form>
            ):(
                <>
                <span>{todo.text}</span>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </li>

        )
    
 }
    
export default TodoItem;