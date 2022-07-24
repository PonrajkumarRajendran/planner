import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import "./dayplanner-row.styles.scss";
const DayPlannerRow = ({ objectData }) => {
  const [classValue, setClassValue] = useState("");
  const { plan, completed, _id } = objectData;
  useEffect(() => {
    if (completed) {
      setClassValue("completed");
    }
  });
  const updateRecord = async (value) => {
    const reqBody = {
      newvalue: value,
      id: _id,
    };
    const response = await fetch(
      "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/plans/update",
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
  const deleteRecord = async () => {
    const reqBody = {
      id: _id,
    };
    const response = await fetch(
      "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/plans/delete",
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
  return (
    <tr className={`planrow ${classValue}`}>
      <td className="planrow-row">{plan}</td>
      <td className="planrow-row planrow-delete-icon">
        <FontAwesomeIcon onClick={deleteRecord} icon={faTrash} />
      </td>
      <td className="planrow-row planrow-update-icon">
        {completed ? (
          <button
            onClick={() => {
              updateRecord(false);
            }}
            className="planrow-undo-button"
          >
            UnDo
          </button>
        ) : (
          <button
            onClick={() => {
              updateRecord(true);
            }}
            className="planrow-update-button"
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
};

export default DayPlannerRow;
