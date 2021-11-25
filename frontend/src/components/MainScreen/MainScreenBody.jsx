import React from 'react';
import { Link } from 'react-router-dom';
const MainScreenBody = ({ teamData, curTeam, curTest, dispatch }) => {
  const addTestEvent = () => {
    dispatch({
      type: 'addTest',
      curTeam: curTeam,
      curTestArray: teamData[curTeam].test, // push로 끝에 넣을꺼니 의미 X ?
      newTestName: 'xwxa',
    });
  };
  return (
    <div className="main-screen-body">
      <div className="main-screen-tests">
        {teamData[curTeam].test.map((e, i) => {
          return (
            <div
              key={`${curTeam}-${i}`}
              className="main-screen-test"
              onClick={() => dispatch({ type: 'changeTest', dst: i })}
            >
              {e}
            </div>
          );
        })}
        <Link
          onClick={addTestEvent}
          to="/makeTest"
          className="main-screen-test add"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          {' '}
          +
        </Link>
      </div>
      <div className="main-screen-test-info">
        {teamData[curTeam].test[curTest]}
      </div>
    </div>
  );
};
export default MainScreenBody;
