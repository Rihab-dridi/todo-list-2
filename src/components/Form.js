import React,{useState} from 'react';


const Form=({todos,setTodos,addHandler})=>{
      const[text,setText]=useState("")
     
    const textHandler=(e)=>{
          setText(e.target.value)  
    }
    
    
    const Add=()=>{
          addHandler({ input:text, id:Math.random(), complete:false, edit:false})
          setText("")
    }

    
    return (
           <div className="myForm">
               <input className="form-input"
                     type="text"
                     value={text}
                     onChange={textHandler}               //The onchange attribute fires the moment when the value of the element is changed.
                     placeholder="Let's Get this Done"
                     autoFocus
                     required
               />
               <button className="Add-btn" onClick={Add}><i className="fas fa-plus-square"></i></button>
              
           </div>
   
        )}

export default Form;