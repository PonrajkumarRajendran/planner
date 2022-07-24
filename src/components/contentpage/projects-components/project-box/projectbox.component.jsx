import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import "./projectbox.styles.scss";

const ProjectBox = ({ title, id }) => {
  const handleDelete = async () => {
    const reqBody = {
      id: id,
    };
    const response = await fetch(
      "https://pure-badlands-08295.herokuapp.com/api/projects/delete",
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
    <div className="projectbox-container">
      <div className="projectbox-title">{title}</div>
      <div className="projectbox-icons">
        <div className="projectbox-icon projectbox-open-icon">
          <FontAwesomeIcon icon={faFolderOpen} />
        </div>
        <div className="projectbox-icon projectbox-delete-icon">
          <FontAwesomeIcon onClick={handleDelete} icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
