import { configureStore } from "@reduxjs/toolkit";
import { usersReduser } from "./users/userSlice";

export const store = configureStore({
    reducer: usersReduser,
})