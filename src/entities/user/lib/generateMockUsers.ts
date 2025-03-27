// import { faker } from '@faker-js/faker'

// interface IUser {
//   id: string
//   name: string
//   email: string
//   age: number
// }

// export const generateMockUsers = (count: number): IUser[] => {
//   const users: IUser[] = []

//   for (let i = 0; i < count; i++) {
//     users.push({
//       id: faker.string.uuid(),
//       name: `${faker.person.firstName()} ${faker.person.lastName()}`,
//       email: faker.internet.email(),
//       age: faker.number.int({ min: 18, max: 65 })
//     })
//   }

//   return users
// }
// entities/user/lib/generateMockUsers.ts
import { faker } from '@faker-js/faker'

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
}

const USERS_KEY = 'mock_users'

export const generateMockUsers = (count: number): IUser[] => {
  const savedUsers = localStorage.getItem(USERS_KEY)

  if (savedUsers) return JSON.parse(savedUsers) as IUser[]

  const users: IUser[] = Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 65 })
  }))

  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  return users
}
