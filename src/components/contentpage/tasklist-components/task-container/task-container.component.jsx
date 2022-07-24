import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditTaskModal from "../edittaskmodal/edittaskmodal.component";
import "./task-container.styles.scss";
const TaskContainer = ({ objectData }) => {
  const [editModalClass, setEditModalClass] = useState("");
  const deleteRecord = async () => {
    const record = {
      id: objectData._id,
    };
    const response = await fetch(
      "https://pure-badlands-08295.herokuapp.com/api/tasks/delete",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("user"),
        },
        body: JSON.stringify(record),
      }
    );
    const result = await response.text();
    console.log(result);
    window.location.reload();
  };
  const handleEditButton = () => {
    setEditModalClass("edit-task-modal-visible");
  };
  const handleModalClose = () => {
    setEditModalClass("");
  };
  const updateTabName = async (value) => {
    const requestBody = {
      id: objectData._id,
      newvalue: value,
    };
    const response = await fetch(
      "https://pure-badlands-08295.herokuapp.com/api/tasks/updateTab",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("user"),
        },
        body: JSON.stringify(requestBody),
      }
    );
    const result = await response.text();
    console.log(result);
    window.location.reload();
  };
  return (
    <div className="taskcontainer-container">
      <EditTaskModal
        titleValue={objectData.title}
        descriptionValue={objectData.description}
        dateValue={objectData.date}
        tabNameValue={objectData.tabName}
        classValue={editModalClass}
        closeFunction={handleModalClose}
        idValue={objectData._id}
      />
      <span>
        <span className="container-titles">{"Title : "}</span>
        {objectData.title}
      </span>
      <br />
      <span>
        <span className="container-titles">{"Finish By : "}</span>
        {objectData.date}
      </span>
      <br />
      <span>
        <span className="container-titles">{"Description : "}</span>
        {objectData.description}
      </span>
      <FontAwesomeIcon
        onClick={handleEditButton}
        className="container-edit-button"
        icon={faPen}
      />
      <span className="container-options-button">&#8942;</span>
      <div className="container-options">
        {objectData.tabName !== "TO-DO" && (
          <span onClick={() => updateTabName("TO-DO")}>Move to TO-DO</span>
        )}
        {objectData.tabName !== "DOING" && (
          <span onClick={() => updateTabName("DOING")}>Move to Doing</span>
        )}
        {objectData.tabName !== "COMPLETED" && (
          <span onClick={() => updateTabName("COMPLETED")}>
            Move to Completed
          </span>
        )}
        {objectData.tabName !== "WORK-LATER" && (
          <span onClick={() => updateTabName("WORK-LATER")}>
            Move to Work later
          </span>
        )}
        <span onClick={deleteRecord} className="delete-option">
          Delete Record
          <FontAwesomeIcon className="container-delete-icon" icon={faTrash} />
        </span>
      </div>
    </div>
  );
};
export default TaskContainer;
