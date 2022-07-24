import ProjectStage from "../project-stage/project-stage.component";
import "./project-modal.styles.scss";
const ProjectModal = () => {
  return (
    <div className="projectmodal-container">
      <div className="projectmodal-window">
        <div className="projectmodal-header">
          <span className="projectmodal-title">Project Title</span>
        </div>
        <div className="projectmodal-addstage">
          <span className="projectmodal-addstage-button">Add Stage</span>
        </div>
        <div className="projectmodal-stages">
          <ProjectStage />
          <ProjectStage />
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
