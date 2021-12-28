import { TesterServiceRow, TitleBar } from '../../components';
import TesterProfileContainer from '../../components/TesterProfileContainer';
import './TesterProfilePage.scss';
import serviceData from '../../modules/testData';

const TesterProfilePage = () => {
  return (
    <div className="tester-body">
      <TitleBar />
      <div className="tester-profile-page">
        <div className="tester-profile-services">
          <TesterServiceRow serviceData={serviceData} ifFeedback={true} />
          <TesterServiceRow serviceData={serviceData} ifFeedback={true} />
          <TesterServiceRow serviceData={serviceData} ifFeedback={true} />
        </div>
        <TesterProfileContainer />
      </div>
    </div>
  );
};

export default TesterProfilePage;
