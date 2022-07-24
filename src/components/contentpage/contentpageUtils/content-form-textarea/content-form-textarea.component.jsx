import "./content-form-textarea.styles.scss";
const ContentTextArea = ({ ...otherProps }) => {
  return (
    <div className="textarea-container">
      <textarea className="textarea-class" {...otherProps}></textarea>
    </div>
  );
};
export default ContentTextArea;
