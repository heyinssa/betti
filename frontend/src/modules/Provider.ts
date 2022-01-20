// 액션 타입 선언

const CHANGE_TEAM = 'Provider/CHANGE_TEAM' as const;
const CHANGE_VERSION = 'Provider/CHANGE_VERSION' as const;
const ADD_TEAM = 'Provider/ADD_TEAM' as const;
const ADD_VERSION = 'Provider/ADD_VERSION' as const;

// 액션 생성 함수 선언

export const changeTeam = (dst: TeamDataType) => ({
  type: CHANGE_TEAM,
  payload: dst,
});

export const changeVersion = (dst: VersionType) => ({
  type: CHANGE_VERSION,
  payload: dst,
});
export const addTeam = (name: string) => ({
  type: ADD_TEAM,
  payload: name,
});

export const addVersion = (newVersion: VersionType) => ({
  type: ADD_VERSION,
  payload: newVersion,
});

// 액션 객체들에 대한 타입 설정

export type curStateAction =
  | ReturnType<typeof changeTeam>
  | ReturnType<typeof changeVersion>
  | ReturnType<typeof addTeam>
  | ReturnType<typeof addVersion>;

// 상태의 타입 및 초깃값 선언

export type VersionType = {
  name: string;
  intro: string;
  link: string;
  platform: string;
  startDay: number;
  endDay: number;
  members: string[];
};

export type TeamDataType = {
  index: number;
  name: string;
  version: VersionType[];
};

export type StateType = {
  stateData: {
    curTeam: TeamDataType | null;
    curVersion: VersionType | null;
  };
  teamData: TeamDataType[];
};

const initalState: StateType = {
  stateData: {
    curTeam: null,
    curVersion: null,
  },
  teamData: [
    {
      index: 0,
      name: 'asg Team',
      version: [
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
      const newTeam = { index: newTeamIndex, name: newTeamName, version: [] };
      stateData.curTeam = newTeam;
      state.teamData.push(newTeam);
      return { ...state };
    }
    case ADD_VERSION: {
      const curTeam = stateData.curTeam;
      let curVersionArray;
      if (curTeam)
        curVersionArray = curTeam.version;
      else
        curVersionArray = [];
      curVersionArray.push(action.payload);
      return { ...state };
    }
    case CHANGE_TEAM: {
      stateData.curTeam = action.payload;
      stateData.curVersion = action.payload.version[0];
      return { ...state };
    }
    case CHANGE_VERSION: {
      stateData.curVersion = action.payload;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default Provider;
