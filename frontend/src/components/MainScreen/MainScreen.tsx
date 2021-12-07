import MainScreenHeader from './MainScreenHeader';
import MainScreenBody from './MainScreenBody';
import { teamDataType } from "../../modules/Provider"
import './MainScreen.scss';

type MainScreenType = {
  teamData : teamDataType[],
  curTeam : number,
  curTest : number
}

const MainScreen = ({ teamData, curTeam, curTest } : MainScreenType) => {
  return (
    <div className="main-screen">
      <MainScreenHeader teamData={teamData} curTeam={curTeam} />
      <MainScreenBody
        teamData={teamData}
        curTeam={curTeam}
        curTest={curTest}
      />
      <div className="separation"></div>
    </div>
  );
};

export default MainScreen;
