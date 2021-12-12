import { TesterServiceRow, TitleBar } from "../../components";
import TesterProfileContainer from "../../components/TesterProfileContainer";
import "./TesterProfilePage.scss";
import { ServiceType } from "../../modules/Provider";

const TesterProfilePage = () => {
  var serviceData: ServiceType = {
    projectName: "ft_transcendence",
    favourites: 123,
    description: "안녕하세요\n반갑습니다..",
    teamName: "transendTeam",
    img: "https://avatars.githubusercontent.com/u/37893979?v=4",
    link: "/use/test1/feedback",
  };
  return (
    <>
      <TitleBar />
      <div className="tester-profile-page">
        <div className="tester-profile-services">
          <TesterServiceRow serviceData={serviceData} />
          <TesterServiceRow serviceData={serviceData} />
          <TesterServiceRow serviceData={serviceData} />
        </div>
        <TesterProfileContainer />
      </div>
    </>
  );
};

export default TesterProfilePage;
