import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./content-add-button.styles.scss";
const ContentAddButton = ({ buttonFunction, buttonName }) => {
  return (
    <span onClick={buttonFunction} className="initiate-add-button">
      <span className="font-icon">
        <FontAwesomeIcon icon={faPlus} />
      </span>
      {` ${buttonName}`}
    </span>
  );
};
export default ContentAddButton;
