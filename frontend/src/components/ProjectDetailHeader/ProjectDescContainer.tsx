import { Image, Header, Label } from "semantic-ui-react";

const ProjectDescContainer = () => {
  return (
    <div className="project-desc-container">
      <Image
        src="/images/wireframe/image.png"
        size="small"
        className="project-profile-image"
      />
      <div>
        <Header as="h1">
          {
            //프로젝트명
          }
          Transcendence
        </Header>
        <Header as="h2">
          <Image
            circular
            src="https://emoji.slack-edge.com/T039P7U66/captain_taeng/5ac2bf3abd5e3d44.png"
          />
          {
            //팀명
          }
          Transcendence
        </Header>
        <div className="project-team-container">
          <Label as="a" image>
            <img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f972@2x.png" />
            Joe
          </Label>
          <Label as="a" image>
            <img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f304@2x.png" />
            Elliot
          </Label>
          <Label as="a" image>
            <img src="https://emoji.slack-edge.com/T039P7U66/ceilingcat/d14f47a9b7ec364e.jpg" />
            Stevie
          </Label>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescContainer;
