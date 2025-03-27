import { FC, useRef, useCallback } from 'react'

import { useAppSelector, useAppDispatch } from '@/app/store/hooks'

import { UserCard } from '@/entities/user/ui'
import { loadMoreUsers, selectUser } from '@/entities/user/model/usersSlice'
import { IUser } from '@/shared/types/commonTypes'

export const UserList: FC = () => {
  const users = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()

  const listRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    if (!listRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = listRef.current
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      dispatch(loadMoreUsers())
    }
  }, [dispatch])

  const handleClick = (user: IUser) => {
    dispatch(selectUser(user))
  }

  return (
    <div
      ref={listRef}
      onScroll={handleScroll}
      style={{ height: '100%', width: '100%', overflow: 'auto' }}
    >
      {users.map((user, idx) => (
        <UserCard key={idx} user={user} onClick={() => handleClick(user)} />
      ))}
    </div>
  )
}
