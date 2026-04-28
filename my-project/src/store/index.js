import { authReducer } from "./slices/authSlice";
import { userReducer } from "./slices/userSlice";

export const reducers = {
    auth: authReducer,
    user: userReducer
};