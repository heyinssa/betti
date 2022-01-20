
import { Button, Header } from "semantic-ui-react";
import "./TesterProfileContainer.scss";

const TesterProfileContainer = () => {
  return (
    <div className="tester-profile-container">
      <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMjNfMTYg/MDAxNTg0OTI1ODc4Njk1.-A4V04lfLn-11b1dYhQgbJ-8xgdk6tqs6vYFlHvt5mgg.Gae9pfYgR_zOm8PMvcW8MZLntmYVKMxBjbjY4awyWrUg.JPEG.heevely0522/3Y5A6541.jpg?type=w800" />
      <Button>이미지 변경하기</Button>
      <Header as="h1">홍길동</Header>
      <Header as="h3">gildong@gmail.com</Header>
      <Button>환경설정</Button>
    </div>
  );
};

export default TesterProfileContainer;
