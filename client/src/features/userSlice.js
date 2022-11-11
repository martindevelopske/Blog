import {createSlice} from '@reduxjs/toolkit';

const userSlice=createSlice({
    name: "user",
    initialState:{
        isSignedin:false,
        userData:null,
        searchInput: "tech",
        blogData:null,
    },
    reducers:{
        setSignedin:(state,action)=>{
            state.isSignedin=action.payload;
        },
        setUserData: (state,action)=>{
            state.userData=action.payload;
        },
        setSearchInput: (state,action)=>{
            state.searchInput=action.payload;
        },
        setBlogData: (state,action)=>{
            state.blogData=action.payload;
        }
    }
})

//export reducers
export const {setBlogData,
    setSearchInput,
    setSignedin,
    setUserData
}=userSlice.actions;
//export state
export const selectSignedIn=(state)=>state.user.isSignedin;
export const selectUserData=(state)=>state.user.userData;
export const selectUserInput=(state)=>state.user.searchInput;
export const selectBlogData=(state)=>state.user.blogData;

//export the reducer
export default userSlice.reducer;