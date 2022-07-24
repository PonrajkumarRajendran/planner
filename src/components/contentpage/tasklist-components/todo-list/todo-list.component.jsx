import { useState } from "react";
import { useEffect } from "react";
import TaskContainer from "../task-container/task-container.component";
import "./todo-list.styles.scss";
const ToDoList = () => {
  const [todoList, setToDoList] = useState({});
  useEffect(() => {
    const getToDoList = async () => {
      const response = await fetch(
        "https://pure-badlands-08295.herokuapp.com//api/tasks/to-do",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("user"),
          },
        }
      );
      const result = await response.json();
      await setToDoList(result);
    };
    getToDoList();
  }, []);
  return (
    <div className="todolist-container">
      <div className="tasklist-header-container">
        <span className="todo-header">TO-DO</span>
      </div>
      <div className="task-containers">
        {Object.keys(todoList).map((index) => {
          return (
            <TaskContainer
              id="taskcontainer"
              key={todoList[index]._id}
              objectData={todoList[index]}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ToDoList;
