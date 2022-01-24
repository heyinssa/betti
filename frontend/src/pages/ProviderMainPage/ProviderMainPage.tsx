
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { ProviderTeamBar, ProviderMainScreen } from './Components';

import './Main.scss';

const ProviderMainPage = () => {
  const state = useSelector((state: RootState) => state.Provider);
  const curTeam = state.stateData.curTeam!;
  const curVersion = state.stateData.curVersion!;
  const teamData = state.teamData!;
  return (
    <>
      {teamData && (
        <div className="page-main">
          <ProviderTeamBar teamData={teamData} />
          {curTeam ? (
            <ProviderMainScreen
              teamData={teamData}
              curTeam={curTeam}
              curVersion={curVersion}
            />
          ) : (<div className="main-screen">없음!</div>)
          }
        </div>
      )}
    </>
  );
};

export default ProviderMainPage;
