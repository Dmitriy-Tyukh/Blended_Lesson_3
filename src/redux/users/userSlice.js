import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name:'user',
    initialState: initialState,
    
    reducers: {
        addUser: (state, {payload}) => {
            state.users.push(payload);
        },
        deleteUser: (state, {payload}) => {
        state.users = state.users.filter(user => user.id !== payload);
    }
    }
})

export const usersReduser = userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;