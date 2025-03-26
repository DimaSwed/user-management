import { EditUserForm } from '@/entities/user/ui'
import styles from './MainPage.module.sass'

export const MainPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.listContainer}></div>
      <div className={styles.editContainer}>
        <EditUserForm />
      </div>
    </div>
  )
}
