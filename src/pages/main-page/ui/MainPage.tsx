import { EditUserForm } from '@/features/edit-user/ui'
import styles from './MainPage.module.sass'
import { UserList } from '@/widgets/user-list/ui'

export const MainPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.listContainer}>
        <h1 className={styles.title}>Список пользователей</h1>
        <UserList />
      </div>

      <div className={styles.editContainer}>
        <h1 className={styles.title}>Редактирование пользователя</h1>
        <EditUserForm />
      </div>
    </div>
  )
}
