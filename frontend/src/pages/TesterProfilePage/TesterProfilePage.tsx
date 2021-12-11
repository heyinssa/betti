import { TesterServiceRow, TitleBar } from "../../components";
import TesterProfileContainer from "../../components/TesterProfileContainer";

const TesterProfilePage = () => {
  return (
    <>
      <TitleBar />
      <div className="tester-profile-page">
        <div className="tester-profile-services">
          <TesterServiceRow />
          <TesterServiceRow />
          <TesterServiceRow />
        </div>
        <TesterProfileContainer />
      </div>
    </>
  );
};

export default TesterProfilePage;
