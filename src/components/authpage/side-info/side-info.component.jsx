import "./side-info.styles.scss";
const SideInfo = () => {
  return (
    <div className="sideinfo-container">
      <span className="sideinfo-appname">Planner</span>
      <br />
      <span className="sideinfo-quote">
        Plan <span className="sideinfo-quote-large">"A"</span> perfectly, there
        is no space for <span className="sideinfo-quote-large cross">"B"</span>.
      </span>
    </div>
  );
};

export default SideInfo;
