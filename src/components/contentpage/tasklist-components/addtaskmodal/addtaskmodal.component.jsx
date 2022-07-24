import { useState } from "react";
import ContentInput from "../../contentpageUtils/content-form-input/contentinput.component";
import ContentTextArea from "../../contentpageUtils/content-form-textarea/content-form-textarea.component";
import ContentDropdown from "../../contentpageUtils/content-form-dropdown/content-form-dropdown";
import ContentFormCalendar from "../../contentpageUtils/content-form-calendar/content-form-calendar.component";
import ContentSubmitButton from "../../contentpageUtils/content-form-button/content-form-button.component";

import "./addtaskmodal.styles.scss";

const newTaskValues = {
  title: "",
  description: "",
  tabName: "TO-DO",
  date: "",
};
const AddTaskModal = ({ className, closeFunction }) => {
  const [newTaskFields, setNewTaskFields] = useState(newTaskValues);
  const { title, description, tabName, date } = newTaskFields;
  const tabOptions = ["TO-DO", "DOING", "COMPLETED", "WORK-LATER"];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTaskFields({ ...newTaskFields, [name]: value });
  };
  const handleDropDown = (event) => {
    const { value } = event.target;
    setNewTaskFields({ ...newTaskFields, tabName: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/tasks/add",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("user"),
        },
        body: JSON.stringify(newTaskFields),
      }
    );
    const result = await response.text();
    console.log(result);
    window.location.reload();
  };
  return (
    <div className={`modal-container ${className}`}>
      <div className="modal-window">
        <div className="modal-window-header">
          <h2>ADD NEW TASK .</h2>
        </div>
        <div className="modal-window-form">
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
            <ContentSubmitButton label={"ADD TASK"} type="submit" />
          </form>
        </div>
        <span onClick={closeFunction} className="modal-close-button">
          X
        </span>
      </div>
    </div>
  );
};
export default AddTaskModal;
