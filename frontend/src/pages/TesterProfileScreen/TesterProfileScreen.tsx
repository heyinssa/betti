import { TesterServiceRow } from "../../components";
import TesterProfileContainer from "../../components/TesterProfileContainer";

const TesterProfileScreen = () => {
  return (
    <div className="tester-profile-page">
      <div className="tester-profile-services">
        <TesterServiceRow />
        <TesterServiceRow />
        <TesterServiceRow />
      </div>
      <TesterProfileContainer />
    </div>
  );
};

export default TesterProfileScreen;
