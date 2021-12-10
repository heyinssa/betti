// 액션 타입 선언

const CHANGE_TEAM = 'Provider/CHANGE_TEAM' as const;
const CHANGE_TEST = 'Provider/CHANGE_TEST' as const;
const ADD_TEAM = 'Provider/ADD_TEAM' as const;
const ADD_TEST = 'Provider/ADD_TEST' as const;


// 액션 생성 함수 선언

export const changeTeam = (dst: number) => ({
    type: CHANGE_TEAM,
    payload: dst
})

export const changeTest = (dst: number) => ({
    type: CHANGE_TEST,
    payload: dst
})
export const addTeam = (name: string) => ({
    type: ADD_TEAM,
    payload: name
});

export const addTest = (curTeam: number, curTestArray: string[], newTestName: string) => ({
    type: ADD_TEST,
    payload: {
        curTeam, newTestName, curTestArray
    }
});


// 액션 객체들에 대한 타입 설정

export type curStateAction =
    | ReturnType<typeof changeTeam>
    | ReturnType<typeof changeTest>
    | ReturnType<typeof addTeam>
    | ReturnType<typeof addTest>


// 상태의 타입 및 초깃값 선언

export type teamDataType = {

    index: number,
    name: string,
    test: string[]
}

export type StateType = {
    stateData: {
        curTeam: number,
        curTest: number,
    },
    teamData: teamDataType[]
};


const initalState: StateType = {
    stateData: {
        curTeam: 0,
        curTest: 0,
    },
    teamData: [
        { index: 0, name: 'asg Team', test: ['qwre', 'asdg', 'asd'] }, // 각 테스트는 객체 형태여야 함.
        { index: 1, name: 'qwer Team', test: ['test1', 'test2', 'test3'] },
    ],
};


// 리듀서 선언

const Provider = (state: StateType = initalState, action: curStateAction) => {
    const stateData = state.stateData;
    const teamData = state.teamData;
    switch (action.type) {
        case ADD_TEAM: {
            const newTeamIndex = teamData.length;
            const newTeamName = action.payload;
            const newTeam = { index: newTeamIndex, name: newTeamName, test: [] };
            stateData.curTeam = newTeamIndex;
            state.teamData.push(newTeam);
            return { ...state };
        }
        case ADD_TEST: {
            console.log('실행됨!');
            const curTeamIndex = action.payload.curTeam;
            const testName = action.payload.newTestName;
            const temp = [...action.payload.curTestArray, testName];
            teamData[curTeamIndex].test = temp;
            return { ...state };
        }
        case CHANGE_TEAM: {
            stateData.curTeam = action.payload;
            stateData.curTest = 0;
            return { ...state };
        }
        case CHANGE_TEST: {
            stateData.curTest = action.payload;
            return { ...state };
        }
        default: {
            return state;
        }
    }

}

export default Provider;