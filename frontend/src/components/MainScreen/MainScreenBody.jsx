import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addTest, changeTest } from '../../modules/Provider' 
const MainScreenBody = ({ teamData, curTeam, curTest }) => {
  const dispatch = useDispatch();
  
  const addTestEvent = () => {
    dispatch(addTest(curTeam,teamData[curTeam].test,'xwxa'));
  }
  return (
    <div className="main-screen-body">
      <div className="main-screen-tests">
        {teamData[curTeam].test.map((e, i) => {
          return (
            <div
              key={`${curTeam}-${i}`}
              className="main-screen-test"
              onClick={() => dispatch(changeTest(i))}
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
