import { Link } from 'react-router-dom';
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

  return (
    <div className="main-screen-body">
      <div className="main-screen-tests">
        {teamData[curTeam].test.map((e, i) => {
          return (
            <div
              // key={`${curTeam}-${i}`}
              className="main-screen-test"
              onClick={() => dispatch(changeTest(i))}
            >
              {e.name}
            </div>
          );
        })}
        <Link
          to="/pro/make"
          className="main-screen-test add"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          {' '}
          +
        </Link>
      </div>
      <Link
        to={`/pro/${state.stateData.curTeam}/${state.stateData.curTest}`}
        className="main-screen-test-info"
      >
        <ShowTest testData={teamData[curTeam].test[curTest]} />
      </Link>
    </div>
  );
};
export default MainScreenBody;
