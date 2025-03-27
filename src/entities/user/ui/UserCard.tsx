import { FC } from 'react'

import { IUser } from '@/shared/types/commonTypes'

import styles from './UserCard.module.sass'

interface UserCardProps {
  user: IUser
  onClick?: () => void
}

export const UserCard: FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.avatar}>
        <span className={styles.avatarText}>
          {user.firstName.charAt(0)}
          {user.lastName.charAt(0)}
        </span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>
          {user.firstName} {user.lastName}
        </h3>
      </div>

      <div className={styles.arrow}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </div>
    </div>
  )
}
