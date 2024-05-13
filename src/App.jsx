import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
      />
    </form>
  );
}

function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo}</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
          <button onClick={() => editTodo(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    const newTodo = prompt("Edit todo:", todos[index]);
    if (newTodo !== null) {
      const newTodos = [...todos];
      newTodos[index] = newTodo;
      setTodos(newTodos);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;
