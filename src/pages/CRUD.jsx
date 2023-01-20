import React, { useState } from "react";

const CRUD = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    // setTodoList((prev) => [...prev, inputValue]);

    if (inputValue !== "")
      setTodoList([
        ...todoList,
        {
          id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
          taskName: inputValue,
          isCompleted: false,
        },
      ]);

    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((t) => t.id != id));
  };

  const completeTask = (id) => {
    // setTodoList(
    //   todoList.map((todo) => {
    //     if (todo.id === id) {
    //       return { ...todo, isCompleted: true };
    //     } else {
    //       return todo;
    //     }
    //   })
    // );

    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  return (
    <div className="CRUD_app">
      <div className="addTask">
        <h1>My Todo :</h1>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            name="inputTask"
            id="inputTask"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          &nbsp;&nbsp;
          <button type="submit">+</button>
        </form>
      </div>
      <div className="showTask">
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              completeTask={completeTask}
            />
          ))}
      </div>
    </div>
  );
};

// TODO custom component for todo
const Todo = ({ deleteTodo, completeTask, todo }) => {
  return (
    <div className="todo">
      <span style={{ color: todo.isCompleted ? "green" : "white" }}>
        {todo.taskName}
      </span>

      <button className="removeBtn" onClick={() => completeTask(todo.id)}>
        &#10003;
      </button>
      <button className="removeBtn" onClick={() => deleteTodo(todo.id)}>
        -
      </button>
    </div>
  );
};

export default CRUD;
