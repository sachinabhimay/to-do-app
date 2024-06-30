import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";
import { logger } from "./middleware";

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware: (getDefaultMiddleware): any => [...getDefaultMiddleware(), logger]
})

export default store;
