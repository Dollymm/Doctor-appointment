import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "./features/doctorSlice";
import {persistStore,persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'root',
    storage
    

}
const p=persistReducer(persistConfig,doctorSlice)
 const store= configureStore({
    reducer:p
})
let persistor=persistStore(store)

export {store,persistor}