import "./calendar-month-selector.styles.scss";
const CalendarMonthSelector = ({
  handleToggleClick,
  currentMonth,
  currentYear,
}) => {
  return (
    <div className="month-selection-container">
      <button
        onClick={() => handleToggleClick("previous")}
        className="toggle-month-button"
      >
        {"<"}
      </button>
      <span className="selected-month">
        <span>{currentMonth}</span>
        <span>{"  "}</span>
        <span>{currentYear}</span>
      </span>
      <button
        onClick={() => handleToggleClick("next")}
        className="toggle-month-button"
      >
        {">"}
      </button>
    </div>
  );
};
export default CalendarMonthSelector;
