import { React } from "react";
import TesterServiceContainer from "./testerServiceContainer";

const TesterServiceRow = () => {
  return (
    <div className="tester-service-row">
      <span>{컨테이너 타이틀}</span>
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
