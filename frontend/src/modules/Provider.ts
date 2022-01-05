// 액션 타입 선언

const CHANGE_TEAM = 'Provider/CHANGE_TEAM' as const;
const CHANGE_TEST = 'Provider/CHANGE_TEST' as const;
const ADD_TEAM = 'Provider/ADD_TEAM' as const;
const ADD_TEST = 'Provider/ADD_TEST' as const;

// 액션 생성 함수 선언

export const changeTeam = (dst: number) => ({
  type: CHANGE_TEAM,
  payload: dst,
});

export const changeTest = (dst: number) => ({
  type: CHANGE_TEST,
  payload: dst,
});
export const addTeam = (name: string) => ({
  type: ADD_TEAM,
  payload: name,
});

export const addTest = (newTest: TestType) => ({
  type: ADD_TEST,
  payload: newTest,
});

// 액션 객체들에 대한 타입 설정

export type curStateAction =
  | ReturnType<typeof changeTeam>
  | ReturnType<typeof changeTest>
  | ReturnType<typeof addTeam>
  | ReturnType<typeof addTest>;

// 상태의 타입 및 초깃값 선언

export type TestType = {
  name: string;
  intro: string;
  link: string;
  platform: string;
  startDay: number;
  endDay: number;
  members: string[];
};

export type teamDataType = {
  index: number;
  name: string;
  test: TestType[];
};

export type StateType = {
  stateData: {
    curTeam: number;
    curTest: number;
  };
  teamData: teamDataType[];
};

const initalState: StateType = {
  stateData: {
    curTeam: 0,
    curTest: 0,
  },
  teamData: [
    {
      index: 0,
      name: 'asg Team',
      test: [
        {
          name: 'temp',
          intro: 'temp',
          link: 'temp',
          platform: 'temp',
          startDay: 20211012,
          endDay: 20211016,
          members: ['temp1', 'temp2', 'temp3']
        },
      ],
    }, // 각 테스트는 객체 형태여야 함.
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
      const curTeam = stateData.curTeam;
      const curTestArray = teamData[curTeam].test;
      curTestArray.push(action.payload);
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
};

export default Provider;
