import { useState } from "react";
import { useEffect } from "react";
import ProjectAddBox from "../projects-components/project-add-box/project-add-box.component";
import ProjectBox from "../projects-components/project-box/projectbox.component";
import "./projects.styles.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch(
        "http://node-express-env.eba-cxqhpveg.us-east-1.elasticbeanstalk.com/api/projects",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("user"),
          },
        }
      );
      const result = await response.json();
      setProjects(result);
    };
    getProjects();
  }, []);
  return (
    <div className="taskbreak-container">
      <div className="projects-list">
        {projects.map((project) => {
          return (
            <ProjectBox
              key={project._id}
              id={project._id}
              title={project.projectName}
            />
          );
        })}
        <ProjectAddBox />
      </div>
    </div>
  );
};

export default Projects;
