
import MainScreenHeader from './MainScreenHeader';
import MainScreenBody from './MainScreenBody';
import { TeamDataType, VersionType } from "../../../../modules/Provider"
import './MainScreen.scss';


const ProviderMainScreen = ({ teamData, curTeam, curVersion }: {
  teamData: TeamDataType[],
  curTeam: TeamDataType,
  curVersion: VersionType
}) => {
  return (
    <div className="main-screen">
      <MainScreenHeader curTeam={curTeam} />
      <MainScreenBody
        teamData={teamData}
        curTeam={curTeam}
        curVersion={curVersion}
      />
    </div>
  );
};

export default ProviderMainScreen;
