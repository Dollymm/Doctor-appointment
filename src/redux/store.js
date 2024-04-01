import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "./features/doctorSlice";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

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