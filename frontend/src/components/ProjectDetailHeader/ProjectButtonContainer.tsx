import { Button, Icon, Label } from "semantic-ui-react";

const ProjectButtonContainer = () => {
  return (
    <div className="project-button-container">
      <Button positive>베타테스트 신청</Button>
      <Button as="div" labelPosition="right">
        <Button icon>
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic pointing="left">
          2,048
        </Label>
      </Button>
    </div>
  );
};

export default ProjectButtonContainer;
