import { FC, useState } from 'react'

import { useAppSelector, useAppDispatch } from '@/app/store/hooks'
import { updateUser } from '@/entities/user/model/usersSlice'
import { IUser } from '@/shared/types/commonTypes'
import { UserFormData, userSchema } from '@/entities/user/model/userSchema'

import avatar from '@/assets/avatar.png'
import styles from './EditUserForm.module.sass'

const initialFormState: Omit<IUser, 'id'> = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0
}

export const EditUserForm: FC = () => {
  const user = useAppSelector((state) => state.users.selectedUser)
  // console.log(user)
  const dispatch = useAppDispatch()

  const [userFormData, setFormData] = useState<Partial<UserFormData>>({})
  const [showErrors, setShowErrors] = useState(false)

  if (!user) return null

  const formData = {
    ...initialFormState,
    ...user,
    ...userFormData
  }

  const validate = () => {
    const res = userSchema.safeParse(formData)
    return res.success ? undefined : res.error.format()
  }

  const reset = () => setFormData({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((l) => ({ ...l, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errors = validate()

    if (errors) {
      setShowErrors(true)
      return
    }

    dispatch(
      updateUser({
        // id: user?.id as string,
        ...formData
      })
    )
  }

  const errors = showErrors ? validate() : undefined

  const isDirty = Object.entries(userFormData).some(
    ([key, value]) => user?.[key as never] !== value
  )

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div className={styles.header}>
          <p className={styles.nameBox}>Пользователь No {formData.id}</p>
        </div>

        <div className={styles.content}>
          <img className={styles.avatar} src={avatar} alt={formData.firstName} />
        </div>

        <div className={styles.editForm}>
          <div className={styles.editFormBox}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <div className={styles.error}>{errors?.firstName?._errors.join(', ')}</div>
          </div>

          <div className={styles.editFormBox}>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <div className={styles.error}>{errors?.lastName?._errors.join(', ')}</div>
          </div>

          <div className={styles.editFormBox}>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            <div className={styles.error}>{errors?.age?._errors.join(', ')}</div>
          </div>

          <div className={styles.editFormBox}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className={styles.error}>{errors?.email?._errors.join(', ')}</div>
          </div>

          <div className={styles.buttonBox}>
            <button type="submit" disabled={!!errors}>
              Обновить пользователя
            </button>

            <button type="button" disabled={!isDirty} onClick={() => reset()}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
