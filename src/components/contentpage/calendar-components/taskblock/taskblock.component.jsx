import { useState } from "react";
import InfoModal from "../infomodal/infomodal.component";
import "./taskblock.styles.scss";

const TaskBlock = ({ value, tabName, description }) => {
  const [modalClass, setModalClass] = useState("");
  const handleClick = () => {
    setModalClass("infomodal-container-visible");
  };
  const closeFunction = () => {
    setModalClass("");
  };
  return (
    <div>
      <InfoModal
        classValue={modalClass}
        info={description}
        closeFunction={closeFunction}
        header="Task"
        statusInfo={`Status: ${tabName}`}
      />
      <div onClick={handleClick} className={`taskTitle-block ${tabName}`}>
        <span className="calendar-task-span">{value}</span>
      </div>
    </div>
  );
};
export default TaskBlock;
