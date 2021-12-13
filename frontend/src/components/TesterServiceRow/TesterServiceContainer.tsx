import { Card, Icon, Image } from "semantic-ui-react";
import { ServiceDataType } from "../../modules/Provider";

const TesterServiceContainer = ({ serviceData }: ServiceDataType) => {
  return (
    <Card className="tester-service-container" href={serviceData.link}>
      <Image src={serviceData.projectImage} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{serviceData.projectName}</Card.Header>
        <Card.Meta>
          <span className="tester-team-name">{serviceData.teamName}</span>
        </Card.Meta>
        <Card.Description>{serviceData.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          {
            //클릭하면 본인 즐겨찾기 등록되도록 설정 (하트 채워짐 / 안채워짐)
          }
          <Icon name="heart" />
          {String(serviceData.favourites)}
        </a>
      </Card.Content>
    </Card>
  );
};

export default TesterServiceContainer;
