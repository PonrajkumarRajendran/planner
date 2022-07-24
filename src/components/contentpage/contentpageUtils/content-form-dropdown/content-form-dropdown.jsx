import "./content-form-dropdown.styles.scss";
const ContentDropdown = ({ label, options = [], ...otherProps }) => {
  return (
    <div className="content-dropdown-container">
      <label>{label}</label>
      <select {...otherProps}>
        {options.map((optionValue) => {
          return (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ContentDropdown;
