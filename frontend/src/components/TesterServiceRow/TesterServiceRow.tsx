import TesterServiceContainer from "./TesterServiceContainer";
import { Header } from "semantic-ui-react";

const TesterServiceRow = () => {
  return (
    <div className="tester-service-row">
      <Header as="h2">
        {
          //컨테이너 타이틀
        }
      </Header>
      <div className="tester-service-row-box">
        <TesterServiceContainer />
        <TesterServiceContainer />
        <TesterServiceContainer />
        <TesterServiceContainer />
      </div>
    </div>
  );
};

export default TesterServiceRow;
