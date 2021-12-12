import { TitleBar } from "../../components";
import TesterServiceRow from "../../components/TesterServiceRow";
import { ServiceType } from "../../modules/Provider";

const TesterMainPage = () => {
  var serviceData: ServiceType = {
    projectName: "ft_transcendence",
    favourites: 123,
    description: "안녕하세요 반갑습니다..",
    teamName: "transendTeam",
    img: "https://avatars.githubusercontent.com/u/37893979?v=4",
    link: "/use/test1",
  };

  return (
    <>
      <TitleBar />
      <TesterServiceRow serviceData={serviceData} />
      <TesterServiceRow serviceData={serviceData} />
      <TesterServiceRow serviceData={serviceData} />
    </>
  );
};

export default TesterMainPage;
