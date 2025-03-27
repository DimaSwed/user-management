import { faker } from '@faker-js/faker'
import { IUser } from '@/shared/types/commonTypes'

const USERS_KEY = 'mock_users'
const BATCH_SIZE: number = 1000 // Порция загрузки

export const getMockUsers = (): IUser[] => {
  const savedUsers: string | null = localStorage.getItem(USERS_KEY)
  if (savedUsers) return JSON.parse(savedUsers) as IUser[]

  const users: IUser[] = Array.from({ length: BATCH_SIZE }, () => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 65 })
  }))

  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  return users
}

export const generateMoreUsers = (count: number): IUser[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 65 })
  }))
}
