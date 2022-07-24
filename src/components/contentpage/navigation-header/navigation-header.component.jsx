
import "./navigation-header.styles.scss";

const NavigationHeader = ({ signOutFunction }) => {
  return (
    <div className="navigationright-header">
      <div className="header-right">
        <h1 className="header-title">
          {localStorage.getItem("pageHeader")
            ? `${localStorage.getItem("pageHeader")}.`
            : "HOME."}
        </h1>
      </div>
      <div className="header-left">
        <span className="header-options" onClick={signOutFunction}>
          Sign Out
        </span>
      </div>
    </div>
  );
};
export default NavigationHeader;
