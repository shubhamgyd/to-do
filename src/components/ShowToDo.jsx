export const ShowTodo = ({ todoList, setTodoList }) => {
  const handleRemove = (_id) => {
    todoList = todoList.filter(({ id }) => id !== _id);
    setTodoList(todoList);
    localStorage.setItem("todo", JSON.stringify(todoList));
    setTodoList(todoList);
  };
  const handleCheckBox = (id) => {
    todoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    localStorage.setItem("todo", JSON.stringify(todoList));
    setTodoList(todoList);
  };
  return (
    <>
      {todoList.map((todo) => (
        <div className="listItem" key={todo.id}>
          <div>
            <input
              onChange={() => handleCheckBox(todo.id)}
              type="checkbox"
              className="checkbox"
              checked={todo.completed || false}
            ></input>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.value}
            </span>
          </div>
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </div>
      ))}
    </>
  );
};
