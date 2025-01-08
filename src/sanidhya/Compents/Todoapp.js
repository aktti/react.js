import React, { useState, useEffect } from 'react';

const Todoapp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const deleteTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Todo deleted successfully') {
          setTodos(todos.filter(todo => todo.id !== id));
        } else {
          console.error('Error deleting todo:', data.message);
        }
      })
      .catch(error => console.error('Error deleting todo:', error));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todoapp;
