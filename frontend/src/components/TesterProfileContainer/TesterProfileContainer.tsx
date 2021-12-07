import { Button, Header } from "semantic-ui-react";

const TesterProfileContainer = () => {
  return (
    <div className="tester-profile-container">
      <img src="//프로필이미지" />
      <Button>이미지 변경하기</Button>
      <Header as="h1">홍길동</Header>
      <Header as="h3">gildong@gmail.com</Header>
      <Button>환경설정</Button>
    </div>
  );
};

export default TesterProfileContainer;
