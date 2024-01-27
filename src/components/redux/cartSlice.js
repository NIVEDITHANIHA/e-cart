import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "e-cart",
    initialState: {
        state: []
    },
    reducers: {
        addCart: (initialState, actions) => {
            initialState.state.push(actions.payload)

        },
        deleteCart: (initialState, actions) => {
            return {
                state: initialState.state.filter((items) => items.id !== actions.payload)
            }
        },

        removeOrder : (initialState)=>{
            initialState.state = []

        }

    }

})


export const { addCart, deleteCart ,removeOrder } = cartSlice.actions
export default cartSlice.reducer;