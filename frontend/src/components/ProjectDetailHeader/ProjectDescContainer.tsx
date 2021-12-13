import { Image } from "semantic-ui-react";
import { ServiceDataType } from "../../modules/Provider";
import ProjectTeammateContainer from "./projectTeammateContainer";

const ProjectDescContainer = ({ serviceData }: ServiceDataType) => {
  return (
    <div className="project-desc-container">
      <Image src={serviceData.projectImage} className="project-profile-image" />
      <div>
        <h1>{serviceData.projectName}</h1>
        <h2>
          <Image circular src={serviceData.teamImage} />
          <span>{serviceData.teamName}</span>
        </h2>
        <ProjectTeammateContainer teammates={serviceData.teammates} />
      </div>
    </div>
  );
};

export default ProjectDescContainer;
