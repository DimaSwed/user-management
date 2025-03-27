import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateMockUsers } from '@/entities/user/lib/generateMockUsers'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
}

interface IUsersState {
  users: IUser[]
  selectedUserId: IUser | null
}

const initialState: IUsersState = {
  users: generateMockUsers(100), // Генерируем 1 млн пользователей
  selectedUserId: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser(state, action: PayloadAction<IUser>) {
      state.selectedUserId = action.payload
    },
    updateUser(state, action: PayloadAction<IUser>) {
      const index = state.users.findIndex((user) => user.id === action.payload.id)
      if (index !== -1) {
        state.users[index] = action.payload
      }
    }
  }
})

export const { selectUser, updateUser } = usersSlice.actions
export default usersSlice.reducer
