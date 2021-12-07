import ProjectButtonContainer from "./ProjectButtonContainer";
import ProjectDescContainer from "./ProjectDescContainer";

const ProjectDetailHeader = () => {
  return (
    <div className="project-detail-header">
      <ProjectDescContainer />
      <ProjectButtonContainer />
    </div>
  );
};

export default ProjectDetailHeader;
