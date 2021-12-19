import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { TeamBar, MainScreen } from '../../components';

import './Main.scss';

const ProviderMainPage = () => {
  const state = useSelector((state: RootState) => state.Provider);
  const curTeam = state.stateData.curTeam;
  const curTest = state.stateData.curTest;
  const teamData = state.teamData;

  return (
    <>
      {teamData && (
        <div className="page-main">
          <TeamBar teamData={teamData} />
          <MainScreen teamData={teamData} curTeam={curTeam} curTest={curTest} />
        </div>
      )}
    </>
  );
};

export default ProviderMainPage;
