import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTest, teamDataType } from '../../modules/Provider';
import { RootState } from '../../modules';

import ShowTest from './ShowTest';

type MainScreenType = {
  teamData: teamDataType[];
  curTeam: number;
  curTest: number;
};

const MainScreenBody = ({ teamData, curTeam, curTest }: MainScreenType) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.Provider);
  const navigate = useNavigate();

  return (
    <div className="main-screen-body">
      <div className="main-screen-tests">
        {teamData[curTeam].test.map((e, i) => {
          return (
            <div
              className="main-screen-test"
              onClick={() => dispatch(changeTest(i))}
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
        onClick={() => { navigate(`/pro/${state.stateData.curTeam}/${state.stateData.curTest}`) }}

      >
        <ShowTest testData={teamData[curTeam].test[curTest]} />
      </div>
    </div>
  );
};
export default MainScreenBody;
