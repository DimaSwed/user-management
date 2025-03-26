import { FC } from 'react'
import avatar from '@/assets/avatar.png'
import styles from './EditUserForm.module.sass'

export const EditUserForm: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.nameBox}>Пользователь id</p>
      </div>

      <div className={styles.content}>
        <img className={styles.avatar} src={avatar} alt={'firstName'} />
      </div>

      <div className={styles.editForm}>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="text" name="age" />
        <input type="email" name="email" />
        <button>Сохранить</button>
      </div>
    </div>
  )
}
