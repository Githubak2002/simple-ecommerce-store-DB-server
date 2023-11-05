const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers:{

        add(state,action){
            let item = action.payload;
            let elePresent = false;
            state.forEach((ele,i) => {
                if(ele.id === action.payload.id){
                    elePresent = true;
                    state[i].qnty += 1;
                    // console.log('ele present state index ',i);
                }
            });
            // console.log("ele is already present ? ",elePresent);
            if(!elePresent)
                state.push(item);
        },

        remove (state,action) {
            return state.filter(  item => item.id !== action.payload)
        },

        decreaseProduct(state,action){     
            const idOfItem = action.payload.id;
            let itemIndex;
            itemIndex = state.findIndex(item => item.id === idOfItem);
            if(state[itemIndex].qnty > 1)
                state[itemIndex].qnty -= 1;
        }
    }
})

export const {add,remove,decreaseProduct} = cartSlice.actions;
export default cartSlice.reducer;