import "./App.css";
import { useState } from "react";
import { AddToDo } from "./components/AddToDo";
import { ShowTodo } from "./components/ShowToDo";

function App() {
  const initialState = [];
  const [todoList, setTodoList] = useState(initialState);
  const [todoId, setTodoId] = useState(0);

  return (
    <div className="container">
      <AddToDo
        todoList={todoList}
        setTodoList={setTodoList}
        todoId={todoId}
        setTodoId={setTodoId}
      />
      <ShowTodo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
