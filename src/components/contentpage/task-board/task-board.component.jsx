import { useState } from "react";
import ContentAddButton from "../contentpageUtils/content-add-button/content-add-button.component";
import AddTaskModal from "../tasklist-components/addtaskmodal/addtaskmodal.component";
import ToDoList from "../tasklist-components/todo-list/todo-list.component";
import DoingList from "../tasklist-components/doing-list/doing-list.component";
import WorkLaterList from "../tasklist-components/work-later-list/work-later-list.component";
import CompletedList from "../tasklist-components/completed-list/completed-list.component";
import "./task-board.styles.scss";
import { useEffect } from "react";
const TaskBoard = () => {
  const [className, setClassName] = useState("");
  useEffect(() => {
    document.title = "Task Board";
  }, []);
  const addModalClick = () => {
    setClassName("modal-visible");
  };
  const closeModalClick = () => {
    setClassName("");
  };
  return (
    <div className="taskboard-container">
      <div className="taskboard-addtask">
        <AddTaskModal closeFunction={closeModalClick} className={className} />
        <ContentAddButton
          buttonFunction={addModalClick}
          buttonName={"New Task"}
        />
      </div>
      <div className="tasklists">
        <ToDoList />
        <DoingList />
        <CompletedList />
        <WorkLaterList />
      </div>
    </div>
  );
};

export default TaskBoard;
