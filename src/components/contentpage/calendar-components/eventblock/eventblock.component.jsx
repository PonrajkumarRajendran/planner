import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import InfoModal from "../infomodal/infomodal.component";
import "./eventblock.styles.scss";
const EventBlock = ({ value, importance, id }) => {
  const [modalClass, setModalClass] = useState("");
  const handleDelete = async () => {
    const reqBody = {
      id: id,
    };
    const response = await fetch(
      "https://pure-badlands-08295.herokuapp.com/api/events/delete",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("user"),
        },
        body: JSON.stringify(reqBody),
      }
    );
    const result = await response.text();
    console.log(result);
    window.location.reload();
  };
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
        info={value}
        closeFunction={closeFunction}
        header="Event"
        statusInfo={`Importance: ${importance}`}
      />
      <div onClick={handleClick} className={`eventTitle-block ${importance}`}>
        <span className="calendar-event-span">{value}</span>
        <FontAwesomeIcon
          onClick={handleDelete}
          className="eventdelete-icon"
          icon={faTrash}
        />
      </div>
    </div>
  );
};
export default EventBlock;
