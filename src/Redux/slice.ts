import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user : null
}
const userSlice = createSlice({
    name : 'user',
    initialState : initialState,
    reducers : {
        userAuth : (state,action) => {
            console.log(action,"action")
            state.user = action.payload.user
        }
    }
})

export const{userAuth} = userSlice.actions
export default userSlice.reducer