import React, { useState } from "react"
import "./App.css"
import { InputField } from "./components/input-field"
import TodoList from "./components/to-do-list"
import { Todo } from "./model"

// FC = functional component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  //console.log(todo);  To test if todo is working
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
};

export default App;
