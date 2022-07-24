import "./content-form-button.styles.scss";
const ContentSubmitButton = ({ label, ...otherProps }) => {
  return (
    <div className="contentsubmitbutton-container">
      <button className="contentsubmitbutton" {...otherProps}>
        {label}
      </button>
    </div>
  );
};
export default ContentSubmitButton;
