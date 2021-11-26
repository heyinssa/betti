import { React, useEffect, useReducer } from 'react';
import {cusUseState} from "../../contexts/Context"
import { TeamBar, MainScreen } from '../../components';
import './Main.scss';


const Main = () => {
  const state = cusUseState();
  const curTeam = state.stateData.curTeam;
  const curTest = state.stateData.curTest;
  const teamData = state.teamData;

  return (
    <>
      {teamData && (
        <div className="page-main">
          <TeamBar teamData={teamData} />
          <MainScreen
            teamData={teamData}
            curTeam={curTeam}
            curTest={curTest}
           
          />
        </div>
      )}
    </>
  );
};

export default Main;
