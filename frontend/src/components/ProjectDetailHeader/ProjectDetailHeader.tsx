import ProjectButtonContainer from "./ProjectButtonContainer";
import ProjectDescContainer from "./ProjectDescContainer";
import "./ProjectDetailHeader.scss";

const ProjectDetailHeader = () => {
  return (
    <div className="project-detail-header">
      <ProjectDescContainer />
      <ProjectButtonContainer />
    </div>
  );
};

export default ProjectDetailHeader;
