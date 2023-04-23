import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({

    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem('user'))|| {}
    },
    reducers: {
        loginUser: (state,action) => {
            console.log(action.payload)
            state.user = action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        logoutUser: (state) => {
            state.user={}
            localStorage.removeItem('user')
        },
    },
})

// Action creators are generated for each case reducer function
export const { loginUser,logoutUser } = counterSlice.actions
export const user = (state) => state.userValue.user

export default counterSlice.reducer