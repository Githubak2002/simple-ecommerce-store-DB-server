import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name:'fav',
    initialState: [],
    reducers: {
        addWl(state,action){
            let item = action.payload;
            let elePresent = false;
            state.forEach((ele,i) => {
                if(ele.id === action.payload.id)
                    elePresent = true;
            });
            if(!elePresent)
                state.push(item);
        },
        removeWl(state,action){
            state.pop(action.payload);
        },

        // fav(state,action){
        //     let item = action.payload;
        //     let elePresent = false;
        //     state.forEach((ele,i) => {
        //         if(ele.id === action.payload.id){
        //             elePresent = true;
                    
        //             state.pop(state[i]);
        //         }
        //     });
        //     if(!elePresent)
        //         state.push(item);
        // },
    }
});

export const {addWl,removeWl} = favSlice.actions;
export default favSlice.reducer;