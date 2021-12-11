import { Card, Icon, Image } from "semantic-ui-react";

const TesterServiceContainer = () => {
  return (
    <Card className="tester-service-container" href="/use/test1">
      <Image
        src="https://avatars.githubusercontent.com/u/37893979?v=4"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>
          Betti
          {
            //프로젝트 이름
          }
        </Card.Header>
        <Card.Meta>
          <span className="date">
            {
              //팀명
            }
            Haeinsa
          </span>
        </Card.Meta>
        <Card.Description>
          {
            //프로젝트 소개
          }
          간략한 팀 소개 입니다 ~~~~asdsadasdasdasdasdas asd adasdasdadasdasdas
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          {
            //클릭하면 본인 즐겨찾기 등록되도록 설정 (하트 채워짐 / 안채워짐)
          }
          <Icon name="heart" />
          123213
        </a>
      </Card.Content>
    </Card>
  );
};

export default TesterServiceContainer;
