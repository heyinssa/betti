
import MainScreenHeader from './MainScreenHeader';
import MainScreenBody from './MainScreenBody';
import { TeamDataType, VersionType } from "../../modules/Provider"
import './MainScreen.scss';

type MainScreenType = {
  teamData: TeamDataType[],
  curTeam: TeamDataType,
  curVersion: VersionType
}

const ProviderMainScreen = ({ teamData, curTeam, curVersion }: MainScreenType) => {
  return (
    <div className="main-screen">
      <MainScreenHeader curTeam={curTeam} />
      <MainScreenBody
        teamData={teamData}
        curTeam={curTeam}
        curVersion={curVersion}
      />
      <div className="main-screen"></div>
    </div>
  );
};

export default ProviderMainScreen;
