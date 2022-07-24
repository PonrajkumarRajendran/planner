import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faChalkboard,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import "./navigation-item.styles.scss";
import { Link } from "react-router-dom";

const icons = [faChalkboard, faClipboardCheck, faCalendarDays];
const NavigationItem = ({ title, iconname, topage }) => {
  const pageValues = {
    "TASK-BOARD": "taskboard",
    "DAY-PLANNER": "dayplanner",
    CALENDAR: "calendar",
  };
  const changeHeader = () => {
    localStorage.setItem("pageHeader", title);
    if (pageValues[title]) {
      localStorage.setItem("pageTitle", pageValues[title]);
    } else {
      localStorage.removeItem("pageTitle");
    }
  };
  return (
    <div className="navigationitem-container">
      <Link onClick={changeHeader} className="navigationitem-link" to={topage}>
        <FontAwesomeIcon
          className="navigationitem-icon"
          icon={icons[iconname]}
        />
        <span className="navigationitem-span">{title}</span>
      </Link>
    </div>
  );
};

export default NavigationItem;
