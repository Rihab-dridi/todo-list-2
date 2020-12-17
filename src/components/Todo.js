import React,{ useState } from 'react';


const Todo=({todo,deleteHandler,setTodos})=>{
  
     const [complete,setComplete]=useState(todo.complete)
     const[edit,setEdit ] = useState(todo.edit)
     const[text,setText]=useState('')

     const textHandler=(e)=>{
          setText(e.target.value)  
    }
     
     const [input,setInput]=useState(todo.input)
     const editHandler=()=>{
       setInput ( text)
       setText('')
       setEdit(false)
           }
      

    return (
           <div>
                
             
               <div className="todos">
                <li  className="todo"style={complete ? {textDecoration:"line-through"}:null}>  {input} </li>
                <div>
                <button className="com-btn" onClick={()=> setComplete(!complete)}><i class="far fa-check-square"></i></button>
                <button className="del-btn"onClick={()=>deleteHandler(todo.id)}><i class="fas fa-trash-alt"></i></button>
                <button className="edt-btn"onClick={()=>setEdit(!edit)}><i class="fas fa-edit"></i></button>
                </div>
               </div>
               <div> 
               {(edit===true)?
                <div>
                <input className="input-edit" type="text" 
                       onChange={textHandler }
                       autoFocus/>
                <button className="sav-btn"onClick={editHandler}>save</button>
                <button className="can-btn" onClick ={ ()=> setEdit(false)}>cancel</button> 
                </div>
                : null}
                </div>
                
                

           </div>
   
        )}

export default Todo;