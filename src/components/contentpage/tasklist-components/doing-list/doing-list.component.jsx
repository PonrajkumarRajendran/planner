import { useState } from "react";
import { useEffect } from "react";
import TaskContainer from "../task-container/task-container.component";
import "./doing-list.styles.scss";
const DoingList = () => {
  const [doingList, setDoingList] = useState({});
  useEffect(() => {
    const getDoingList = async () => {
      const response = await fetch(
        "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/tasks/doing",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("user"),
          },
        }
      );
      const result = await response.json();
      await setDoingList(result);
    };
    getDoingList();
  }, []);
  return (
    <div className="doinglist-container">
      <div className="tasklist-header-container">
        <span className="tasklist-header doing-header">DOING</span>
      </div>
      <div className="task-containers">
        {Object.keys(doingList).map((index) => {
          return (
            <TaskContainer
              id="taskcontainer"
              key={doingList[index]._id}
              objectData={doingList[index]}
            />
          );
        })}
      </div>
    </div>
  );
};
export default DoingList;
