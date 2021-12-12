import TesterServiceContainer from "./TesterServiceContainer";
import { Header } from "semantic-ui-react";
import "./TesterServiceRow.scss";
import { ServiceType } from "../../modules/Provider";

type ServiceRowType = {
  serviceData: ServiceType;
};

const TesterServiceRow = ({ serviceData }: ServiceRowType) => {
  console.log(serviceData);
  return (
    <div className="tester-service-row">
      <Header as="h2">
        {
          //컨테이너 타이틀
        }
        컨테이너 타이틀 임시
      </Header>
      <div className="tester-service-row-box">
        <TesterServiceContainer serviceData={serviceData} />
        <TesterServiceContainer serviceData={serviceData} />
        <TesterServiceContainer serviceData={serviceData} />
        <TesterServiceContainer serviceData={serviceData} />
        <TesterServiceContainer serviceData={serviceData} />
        <TesterServiceContainer serviceData={serviceData} />
        <TesterServiceContainer serviceData={serviceData} />
        <TesterServiceContainer serviceData={serviceData} />
        <TesterServiceContainer serviceData={serviceData} />
        <TesterServiceContainer serviceData={serviceData} />
      </div>
    </div>
  );
};

export default TesterServiceRow;
