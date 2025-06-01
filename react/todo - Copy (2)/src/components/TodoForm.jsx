

const TodoForm = ()=>{

     const [text,setText]  = useState('');

     function handleSubmit(e){
         e.prevent.default();
         if(text.trim()){
         dispatch({type:"ADD_TODO", payload:text});
         setText("");
         }
     }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} 
             placeholder="Add todo"
            />

            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;