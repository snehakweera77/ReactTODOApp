import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Read', 'Cook']);
  const [input, setInput] = useState('');
  const addTodo = (event) =>{
    event.preventDefault();
    setTodos([...todos, input]);
  }

  return (
    <div className="App">
      <h1>Welcome to my TODO app</h1>
      <form>
        <input value = {input} onChange = {event => setInput(event.target.value)}/>
        <button type = "submit" onClick = {addTodo}>Submit</button>
        <ul>
          {todos.map(todo =>(
            <li>{todo}</li>
          ))}
        </ul>
      </form>
      
    </div>
  );
}

export default App;
