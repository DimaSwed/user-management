// import { FC } from 'react'
// import avatar from '@/assets/avatar.png'
// import styles from './EditUserForm.module.sass'

// export const EditUserForm: FC = () => {
//   return (
//     <div className={styles.card}>
//       <div className={styles.header}>
//         <p className={styles.nameBox}>Пользователь id</p>
//       </div>

//       <div className={styles.content}>
//         <img className={styles.avatar} src={avatar} alt={'firstName'} />
//       </div>

//       <div className={styles.editForm}>
//         <input type="text" name="firstName" />
//         <input type="text" name="lastName" />
//         <input type="text" name="age" />
//         <input type="email" name="email" />
//         <button>Сохранить</button>
//       </div>
//     </div>
//   )
// }

import { FC, useEffect, useState } from 'react'
import avatar from '@/assets/avatar.png'
import styles from './EditUserForm.module.sass'
import { useAppSelector, useAppDispatch } from '@/app/store/hooks'
import { updateUser } from '@/entities/user/model/usersSlice'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
}

export const EditUserForm: FC = () => {
  const user = useAppSelector((state) => state.users.selectedUserId)
  console.log(user)
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState<IUser | null>(null)

  useEffect(() => {
    if (user) {
      setFormData(user)
    }
  }, [user])

  if (!formData) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = () => {
    if (formData) {
      dispatch(updateUser(formData))
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.nameBox}>Пользователь {formData.id}</p>
      </div>

      <div className={styles.content}>
        <img className={styles.avatar} src={avatar} alt={'firstName'} />
      </div>

      <div className={styles.editForm}>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <button onClick={handleUpdate}>Сохранить</button>
      </div>
    </div>
  )
}
