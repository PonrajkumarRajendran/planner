import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./project-add-box.styles.scss";

const newProjectValues = {
  projectName: "",
};

const ProjectAddBox = () => {
  const [newProjectFields, setNewProjectFields] = useState(newProjectValues);
  const { projectName } = newProjectFields;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://pure-badlands-08295.herokuapp.com//api/projects/add",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": localStorage.getItem("user"),
        },
        body: JSON.stringify(newProjectFields),
      }
    );
    const result = await response.text();
    console.log(result);
    window.location.reload();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProjectFields({ ...newProjectFields, [name]: value });
  };
  return (
    <div className="project-add-box">
      <form onSubmit={handleSubmit} className="newproject-form">
        <input
          className="newproject-input"
          type="text"
          name="projectName"
          value={projectName}
          onChange={handleChange}
          placeholder="New Project"
        />

        <div className="projectbutton-container">
          <button type="submit" className="addproject-button">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectAddBox;
