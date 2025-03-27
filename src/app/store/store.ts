import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '@/entities/user/model/usersSlice'

export const store = () => {
  return configureStore({
    reducer: { users: usersReducer }
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
