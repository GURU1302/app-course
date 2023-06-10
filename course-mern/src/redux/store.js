import {configureStore} from "@reduxjs/toolkit";
import { courseReducer } from "./reducers/courseReducer";
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer";


const store = configureStore({
    reducer:{
    user: userReducer,
    profile:profileReducer,
    course:courseReducer,
    subscription:subscriptionReducer,
    },
});

export default store;

export const server = 'https://backend-app-courses-api.onrender.com/api/v1';