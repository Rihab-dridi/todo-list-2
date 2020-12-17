import React,{useState} from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './App.css';


function App() {
  const [todos,setTodos]=useState([])
  
  const addHandler =(newAdd)=>{
    setTodos([...todos,newAdd])
  }



  return (
    <div className="App">
      <Form
            todos={todos}
            setTodos={setTodos}
            addHandler={addHandler}
       />
      <TodoList 
              todos={todos}
            setTodos={setTodos}
            addHandler={addHandler}
      />
    
    </div>
  );
}

export default App;
