import { createSlice } from "@reduxjs/toolkit";

const ecartSlice = createSlice({

    name: 'wishlist',
    initialState: {
        state: []
    },
    reducers: {

        // Action happened inside the reducers

        addWishlist: (initialState, actions) => {
            initialState.state.push(actions.payload);


        },
        removeWishlist: (initialState, actions) => {
            // return {
            //     state: initialState.state.filter(items => items.id !== actions.payload)
            // }

            let filteredState = [];
            for (let i = 0; i < initialState.state.length; i++) {
                if (initialState.state[i].id !== actions.payload) {
                    filteredState.push(initialState.state[i]);
                }
            }

            return {
                state: filteredState
            };

           



        }

    }



})
export const { addWishlist, removeWishlist } = ecartSlice.actions

export default ecartSlice.reducer;