import { FC } from 'react'
import { UserCard } from '@/entities/user/ui'
import { useAppSelector, useAppDispatch } from '@/app/store/hooks'
import { selectUser } from '@/entities/user/model/usersSlice'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
}
export const UserList: FC = () => {
  const users = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()

  const handleClick = (userId: IUser) => {
    dispatch(selectUser(userId))
  }

  return (
    <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>
      {users.map((user, idx) => (
        <UserCard key={idx} user={user} onClick={() => handleClick(user)} />
      ))}
    </div>
  )
}
