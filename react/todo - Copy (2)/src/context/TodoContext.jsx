const { createContext, useReducer } = require("react");



export const TodoData = createContext();

const initialState = [];

const todoReducer = (state,action)=>{

    switch(action.type){

        case 'ADD_TODO':
            return [...state, {id:Date.now() , text:action.payload}]
        case 'REMOVE_TODO':
            return state.filter(todo=>todo.id !== action.payload)  ;
        case 'EDIT_TODO':
             return state.map(todo => 
                 todo.id === action.payload.id ?{...todo,text:action.payload.text}:todo
             )
        default: return state;           
    }
}

 const TodoContext = ({children})=>{
    const [todos, dispatch] = useReducer(todoReducer,initialState);

    return(
        <TodoData.Provider value={{todos,dispatch}}>
            {children}
        </TodoData.Provider>
    )
}

export default TodoContext;