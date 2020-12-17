import React,{} from 'react';
import Todo from'./Todo';



const TodoList=({todos,setTodos,addHandler})=>{
     const deleteHandler =(id)=>{
         setTodos( todos.filter((el,i)=>  ( el.id !== id) ))
     }

    
   
 
     
    return (
           <div calssName="list">
                <ul className="todo-list">
                    {todos.map((el)=>(
                    <Todo
                          todos={todos}
                          seTodos={setTodos}
                          todo={el}
                          deleteHandler={deleteHandler}
                          addHandler={addHandler}
                     />
                      ) ) }
                     
                </ul>
           </div>
   
        )}

export default TodoList;