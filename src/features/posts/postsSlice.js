import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", title: "First Post", content: "Hello World!"},
    {id:"2", title: "Second Post", content: "More Text"}
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        // addPost: (state, action) => {
        //     state.push(action.payload)
        // },
        // deletePost: (state, action) => {
        //     state = state.filter(post => post.id!== action.payload)
        // }
    }
})

export const postReducer = postsSlice.reducer;