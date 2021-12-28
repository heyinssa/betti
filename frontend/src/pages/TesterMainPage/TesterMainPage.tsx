import { TitleBar } from '../../components';
import TesterServiceRow from '../../components/TesterServiceRow';
import serviceData from '../../modules/testData';

const TesterMainPage = () => {
  return (
    <div className="tester-body">
      <TitleBar />
      <TesterServiceRow serviceData={serviceData} ifFeedback={false} />
      <TesterServiceRow serviceData={serviceData} ifFeedback={false} />
      <TesterServiceRow serviceData={serviceData} ifFeedback={false} />
    </div>
  );
};

export default TesterMainPage;
