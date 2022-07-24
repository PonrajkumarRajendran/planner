import "./content-form-calendar.styles.scss";
const ContentFormCalendar = ({ label, ...otherProps }) => {
  return (
    <div className="contentformcalendar-container">
      <span className="calendar-input-label">{label}</span>
      <input type="date" {...otherProps} />
    </div>
  );
};

export default ContentFormCalendar;
