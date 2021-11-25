import { React, useEffect, useReducer } from 'react';
import { TeamBar, MainScreen } from '../../components';
import './Main.scss';

const initalState = {
  stateData: {
    curTeam: 0,
    curTest: 0,
  },
  teamData: [
    { index: 0, name: 'asg Team', test: ['qwre', 'asdg', 'asd'] }, // 각 테스트는 객체 형태여야 함.
    { index: 1, name: 'qwer Team', test: ['test1', 'test2', 'test3'] },
  ],
};

const reducer = (state, action) => {
  const stateData = state.stateData;
  const teamData = state.teamData;
  switch (action.type) {
    case 'addTeam': {
      const newTeamIndex = teamData.length;
      const newTeamName = action.name;
      const newTeam = { index: newTeamIndex, name: newTeamName, test: [] };
      stateData.curTeam = newTeamIndex;
      state.teamData.push(newTeam);
      return { ...state };
    }
    case 'addTest': {
      console.log('실행됨!');
      const curTeamIndex = action.curTeam; // state에서 끌어다 써도 될 듯
      const testName = action.newTestName;
      const temp = [...action.curTestArray, testName];
      teamData[curTeamIndex].test = temp;
      return { ...state };
    }
    case 'changeTeam': {
      stateData.curTeam = action.dst;
      stateData.curTest = 0;
      return { ...state };
    }
    case 'changeTest': {
      stateData.curTest = action.dst;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const curTeam = initalState.stateData.curTeam;
  const curTest = initalState.stateData.curTest;
  const teamData = state.teamData;

  useEffect(() => {
    console.log(state);
  }, [state]);

  // 여기서 라우팅을 해?
  return (
    <>
      {teamData && (
        <div className="page-main">
          <TeamBar teamData={teamData} dispatch={dispatch} />
          <MainScreen
            teamData={teamData}
            curTeam={curTeam}
            curTest={curTest}
            dispatch={dispatch}
          />
        </div>
      )}
    </>
  );
};

export default Main;
