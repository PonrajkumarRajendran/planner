import "./contentinput.styles.scss";
const ContentInput = ({ label, ...otherProps }) => {
  return (
    <div className="contentinput-container">
      <input {...otherProps} />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};
export default ContentInput;
