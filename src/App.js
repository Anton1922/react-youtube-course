import React from 'react';
import TodoList from './todo/todoList';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy bread, asshole!'},
    {id: 2, completed: false, title: 'Buy butter, asshole!'},
    {id: 3, completed: false, title: 'Buy milk, asshole!'}
  ])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todos.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }
  return (
    <div className="wrapper"> 
      <h1>React tutorial</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
