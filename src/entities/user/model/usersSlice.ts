import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getMockUsers, generateMoreUsers } from '@/entities/user/lib/generateMockUsers'
import { IUser } from '@/shared/types/commonTypes'

interface IUsersState {
  users: IUser[]
  selectedUser: IUser | null
}

const initialState: IUsersState = {
  users: getMockUsers(),
  selectedUser: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadMoreUsers(state) {
      const newUsers = generateMoreUsers(1000)
      state.users.push(...newUsers)

      localStorage.setItem('mock_users', JSON.stringify(state.users))
    },
    selectUser(state, action: PayloadAction<IUser>) {
      state.selectedUser = action.payload
    },
    updateUser(state, action: PayloadAction<IUser>) {
      const index = state.users.findIndex((user) => user.id === action.payload.id)
      if (index !== -1) {
        state.users[index] = action.payload
        localStorage.setItem('mock_users', JSON.stringify(state.users))
      }
    }
  }
})

export const { loadMoreUsers, selectUser, updateUser } = usersSlice.actions
export default usersSlice.reducer
