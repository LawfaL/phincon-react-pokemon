import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const pokeAppConfigStore = configureStore({
    reducer: {},
    devTools: {
        name: "PhinCon Pokemon App"
    }
})

export type AppDispatch = typeof pokeAppConfigStore.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default pokeAppConfigStore