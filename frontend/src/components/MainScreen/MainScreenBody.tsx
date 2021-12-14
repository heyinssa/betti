import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeTest } from '../../modules/Provider';
import { teamDataType } from "../../modules/Provider"

type MainScreenType = {
  teamData: teamDataType[],
  curTeam: number,
  curTest: number
}

const MainScreenBody = ({ teamData, curTeam, curTest }: MainScreenType) => {
  const dispatch = useDispatch();

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
          to="/pro/makeTest"
          className="main-screen-test add"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          {' '}
          +
        </Link>
      </div>
      <div className="main-screen-test-info">
        {teamData[curTeam].test[curTest].name}
      </div>
    </div>
  );
};
export default MainScreenBody;
