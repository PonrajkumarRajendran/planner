import { useState } from "react";
import ContentSubmitButton from "../../contentpageUtils/content-form-button/content-form-button.component";
import ContentFormCalendar from "../../contentpageUtils/content-form-calendar/content-form-calendar.component";
import ContentInput from "../../contentpageUtils/content-form-input/contentinput.component";
import ContentDropdown from "../../contentpageUtils/content-form-dropdown/content-form-dropdown";

import "./addeventmodal.styles.scss";
const AddEventModalFormValues = {
  date: "",
  title: "",
  eventImportance: "High",
};
const AddEventModal = ({ closeFunction, classValue }) => {
  const [addEventModalFormFields, setEventModalFormFields] = useState(
    AddEventModalFormValues
  );
  const importanceOptions = ["High", "Medium", "Low"];
  const { date, title, eventImportance } = addEventModalFormFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventModalFormFields({ ...addEventModalFormFields, [name]: value });
  };

  const handleDropDown = (event) => {
    const { value } = event.target;
    setEventModalFormFields({
      ...addEventModalFormFields,
      eventImportance: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://pure-badlands-08295.herokuapp.com/api//events/add",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("user"),
        },
        body: JSON.stringify(addEventModalFormFields),
      }
    );
    const result = await response.text();
    console.log(result);
    window.location.reload();
  };
  return (
    <div className={`addeventmodal-container ${classValue}`}>
      <div className="addeventmodal-window">
        <div className="addeventmodal-header-container">
          <span className="addeventmodal-header">ADD EVENT.</span>
        </div>

        <div className="addeventmodal-form">
          <form onSubmit={handleSubmit}>
            <ContentFormCalendar
              name="date"
              value={date}
              required
              onChange={handleChange}
              label={"Event Date :"}
            />
            <ContentInput
              onChange={handleChange}
              label={"Event Title"}
              name="title"
              value={title}
              required
            />
            <ContentDropdown
              value={eventImportance}
              onChange={handleDropDown}
              label={"Choose Importance: "}
              options={importanceOptions}
            />
            <ContentSubmitButton label={"ADD EVENT"} type="submit" />
          </form>
          <span onClick={closeFunction} className="eventmodal-closebutton">
            X
          </span>
        </div>
      </div>
    </div>
  );
};
export default AddEventModal;
