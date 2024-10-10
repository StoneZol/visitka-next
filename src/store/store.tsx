import { configureStore } from "@reduxjs/toolkit";

export const newStore = () => {
    return configureStore({
      reducer: {},
    })
  }

export type AppStore = ReturnType<typeof newStore>

export type RootState =ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
