import { StateType, Action } from './Type'

export const initalState = {
    stateData: {
        curTeam: 0,
        curTest: 0,
    },
    teamData: [
        { index: 0, name: 'asg Team', test: ['qwre', 'asdg', 'asd'] }, // 각 테스트는 객체 형태여야 함.
        { index: 1, name: 'qwer Team', test: ['test1', 'test2', 'test3'] },
    ],
};

export const reducer = (state: StateType, action: Action): StateType => {
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