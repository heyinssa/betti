import { React, useEffect } from 'react';
import MainScreenHeader from './MainScreenHeader';
import MainScreenBody from './MainScreenBody';
import './MainScreen.scss';

const MainScreen = ({ teamData, curTeam, curTest, dispatch }) => {
  useEffect(() => {}, []);
  return (
    <div className="main-screen">
      <MainScreenHeader teamData={teamData} curTeam={curTeam} />
      <MainScreenBody
        teamData={teamData}
        curTeam={curTeam}
        curTest={curTest}
        dispatch={dispatch}
      />
      <div className="separation"></div>
    </div>
  );
};

export default MainScreen;
