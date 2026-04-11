export const authInitialState = { token: null };

export function authReducer(state = authInitialState, action) {
    switch (action.type) {
        case "auth/setToken":
            return {...state, token: action.payload };
        default:
            return state;
    }
}