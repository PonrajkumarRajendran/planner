import "./infomodal.styles.scss";
const InfoModal = ({ info, classValue, closeFunction, header, statusInfo }) => {
  return (
    <div
      onClick={closeFunction}
      className={`infomodal-container ${classValue}`}
    >
      <div className="infomodal-window">
        <span className="infomodal-header">{header}</span>
        <span className="infomodal-status">{statusInfo}</span>
        <span className="infomodal-span">{info}</span>
      </div>
    </div>
  );
};
export default InfoModal;
