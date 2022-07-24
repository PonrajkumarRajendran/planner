import { useState } from "react";
import { useEffect } from "react";
import TaskContainer from "../task-container/task-container.component";
import "./work-later-list.styles.scss";
const WorkLaterList = () => {
  const [workLaterList, setWorkLaterList] = useState({});
  useEffect(() => {
    const getWorkLaterList = async () => {
      const response = await fetch(
        "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/tasks/work-later",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("user"),
          },
        }
      );
      const result = await response.json();
      await setWorkLaterList(result);
    };
    getWorkLaterList();
  }, []);
  return (
    <div className="worklaterlist-container">
      <div className="tasklist-header-container">
        <span className="todo-header">WORK LATER</span>
      </div>
      <div className="task-containers">
        {Object.keys(workLaterList).map((index) => {
          return (
            <TaskContainer
              id="taskcontainer"
              key={workLaterList[index]._id}
              objectData={workLaterList[index]}
            />
          );
        })}
      </div>
    </div>
  );
};
export default WorkLaterList;
