
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeVersion, TeamDataType, VersionType } from '../../../../modules/Provider';
import { RootState } from '../../../../modules';

import ShowTest from './ShowTest';


const MainScreenBody = ({ teamData, curTeam, curVersion }: {
  teamData: TeamDataType[];
  curTeam: TeamDataType;
  curVersion: VersionType;
}) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.Provider);
  const navigate = useNavigate();

  return (
    <div className="main-screen-body">
      <div className="main-screen-tests">
        {curTeam && curTeam.version.map((e, i) => {
          return (
            <div
              className="main-screen-test"
              onClick={() => dispatch(changeVersion(curTeam.version[i]))}
            >
              {e.name}
            </div>
          );
        })}
        <div className="main-screen-test add" onClick={() => { navigate('/pro/make') }}>
          +
        </div>
      </div>
      <div className="main-screen-test-info"
      // onClick={() => { navigate(`/pro/${state.stateData.curTeam}/${state.stateData.curVersion}`) }}
      >
        <ShowTest versionData={curVersion} />
      </div>
    </div>
  );
};
export default MainScreenBody;
