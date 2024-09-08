export const AddToDo = ({ todoList, setTodoList, todoId, setTodoId }) => {
  let newId = todoId + 1;
  const handleAddToDo = () => {
    let todoToAdd = document.getElementById("todo").value;
    if (todoToAdd !== "") {
      let newTodoList = [
        ...todoList,
        { id: newId, value: todoToAdd, completed: false },
      ];
      setTodoList(newTodoList);
      localStorage.setItem("todo", JSON.stringify(newTodoList));
      setTodoId(newId);
      document.getElementById("todo").value = "";
    }
  };
  return (
    <div className="addToDo">
      <input placeholder="Enter the Todos..." id="todo"></input>
      <button onClick={handleAddToDo}>Add</button>
    </div>
  );
};
