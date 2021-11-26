import React, { createContext, useReducer, useContext } from 'react';
import { StateType, DispatchType } from './Type'
import { reducer, initalState } from "./useReducer";

const StateContext = createContext<StateType | undefined>(undefined);
const DispatchContext = createContext<DispatchType | undefined>(undefined);


// 컴포넌트에서 useContext를 사용할 때 값이 유효한지 유효하지 않은지 체크해주는 커스텀 훅을 만든다.
// 에러 체크 기능이 추가되었을 뿐 자식 컴포넌트에서 자신을 감싼 Context를 useContext로 불러온다는 점은 변함없다.
export const cusUseState = (): StateType => {
    const state = useContext(StateContext);
    if (!state) throw new Error('Provider not found');
    return state;
}

export const cusUseDispatch = (): DispatchType => {
    const dispatch = useContext(DispatchContext);
    if (!dispatch) throw new Error('Provider not found');
    return dispatch;
}

// 데이터 통신으로 받아올 것.

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initalState);
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

