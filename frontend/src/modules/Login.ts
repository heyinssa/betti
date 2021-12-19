const TOGGLE_LOGIN = "Login/TOGGLE_LOGIN" as const;

export const toggleLogin = () => ({
    type : TOGGLE_LOGIN
});

export type loginAction = 
| ReturnType<typeof toggleLogin>

export type loginStateType = {
    isLogin : boolean
}

const initalState: loginStateType = {
    isLogin : false
}

const Login = (state : loginStateType = initalState, action : loginAction) => {
    switch (action.type) {
            case TOGGLE_LOGIN: {
                state.isLogin = !state.isLogin;
                return { ...state };
            }
            default : {
                return state;
            }
        }
}


export default Login;