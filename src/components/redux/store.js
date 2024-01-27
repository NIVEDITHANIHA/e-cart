import { configureStore } from "@reduxjs/toolkit";
import ecartSlice from "./ecartSlice";
import cartSlice from "./cartSlice";





const store =  configureStore({

    reducer:{
        wiishlistreducer : ecartSlice,
        cartSlicereducer : cartSlice,
        
    }

})


export default  store;