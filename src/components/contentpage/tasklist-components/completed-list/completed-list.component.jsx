import { useState } from "react";
import { useEffect } from "react";
import TaskContainer from "../task-container/task-container.component";
import "./completed-list.styles.scss";

const CompletedList = () => {
  const [completedList, setCompletedList] = useState({});
  useEffect(() => {
    const getCompletedList = async () => {
      const response = await fetch(
        "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/tasks/completed",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("user"),
          },
        }
      );
      const result = await response.json();
      await setCompletedList(result);
    };
    getCompletedList();
  }, []);
  return (
    <div className="completedlist-container">
      <div className="tasklist-header-container">
        <span className="completed-header">COMPLETED</span>
      </div>
      <div className="task-containers">
        {Object.keys(completedList).map((index) => {
          return (
            <TaskContainer
              id="taskcontainer"
              key={completedList[index]._id}
              objectData={completedList[index]}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CompletedList;
