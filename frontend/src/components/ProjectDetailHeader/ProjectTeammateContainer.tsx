import { Label } from "semantic-ui-react";
import { TeammatesType } from "../../modules/Provider";

type TeammateType = {
  teammates: Array<TeammatesType>;
};

const ProjectTeammateContainer = ({ teammates }: TeammateType) => {
  return (
    <div className="project-team-container">
      {teammates.map((teammate) => (
        <Label as="a" image>
          <img src={teammate.profileImage} alt="teammate" />
          {teammate.name}
        </Label>
      ))}
    </div>
  );
};

export default ProjectTeammateContainer;
