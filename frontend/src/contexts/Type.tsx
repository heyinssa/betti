import { Dispatch } from 'react';

export type StateType = {
    stateData: {
        curTeam: number,
        curTest: number
    },
    teamData: teamDataType[]
};

type teamDataType = {

    index: number,
    name: string,
    test: string[]

}

export type Action =
    | { type: 'addTeam', name: string }
    | { type: 'addTest', curTeam: number, newTestName: string, curTestArray: string[] }
    | { type: 'changeTeam', dst: number }
    | { type: 'changeTest', dst: number }

export type DispatchType = Dispatch<Action>;