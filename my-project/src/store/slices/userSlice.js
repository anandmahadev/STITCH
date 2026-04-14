export const userInitialState = { profile: null };

export function userReducer(state = userInitialState, action) {
    switch (action.type) {
        case "user/setProfile":
            return {...state, profile: action.payload };
        default:
            return state;
    }
}