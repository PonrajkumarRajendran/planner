import { useState } from "react";
import ContentInput from "../../contentpageUtils/content-form-input/contentinput.component";
import ContentTextArea from "../../contentpageUtils/content-form-textarea/content-form-textarea.component";
import ContentDropdown from "../../contentpageUtils/content-form-dropdown/content-form-dropdown";
import ContentFormCalendar from "../../contentpageUtils/content-form-calendar/content-form-calendar.component";
import ContentSubmitButton from "../../contentpageUtils/content-form-button/content-form-button.component";
import "./edittaskmodal.styles.scss";
import { useEffect } from "react";

const EditTaskModal = ({
  titleValue,
  descriptionValue,
  tabNameValue,
  dateValue,
  classValue,
  closeFunction,
  idValue,
}) => {
  const editTaskValues = {
    title: titleValue,
    description: descriptionValue,
    tabName: tabNameValue,
    date: dateValue,
  };
  const [editTaskFields, setEditTaskFields] = useState(editTaskValues);
  const { title, description, tabName, date } = editTaskFields;
  const tabOptions = ["TO-DO", "DOING", "COMPLETED", "WORK-LATER"];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditTaskFields({ ...editTaskFields, [name]: value });
    console.log(editTaskFields);
  };
  const handleDropDown = (event) => {
    const { value } = event.target;
    setEditTaskFields({ ...editTaskFields, tabName: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      id: idValue,
      ...editTaskFields,
    };
    await fetch(
      "https://pure-badlands-08295.herokuapp.com//api/tasks/updateRecord",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("user"),
        },
        body: JSON.stringify(requestBody),
      }
    );
    window.location.reload();
  };
  return (
    <div className={`edit-task-modal-container ${classValue}`}>
      <div className="edit-modal-window">
        <span className="edit-modal-header">Edit Task.</span>
        <div className="edit-modal-window-form">
          <form onSubmit={handleSubmit}>
            <ContentInput
              onChange={handleChange}
              type="text"
              name="title"
              value={title}
              required
              label={"TITLE"}
            />
            <ContentTextArea
              placeholder="DESCRIPTION"
              onChange={handleChange}
              required
              cols="33"
              rows="6"
              value={description}
              name="description"
            />
            <ContentDropdown
              value={tabName}
              onChange={handleDropDown}
              label={"Choose Tab: "}
              options={tabOptions}
            />
            <ContentFormCalendar
              name="date"
              value={date}
              required
              onChange={handleChange}
              label={"DEADLINE :"}
            />
            <ContentSubmitButton label={"EDIT TASK"} type="submit" />
            <span onClick={closeFunction} className="close-button">
              X
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
