import { z } from 'zod'

export const userSchema = z.object({
  firstName: z.string().min(3, { message: 'Имя должно содержать минимум 3 символа' }),
  lastName: z.string().min(3, { message: 'Фамилия должна содержать минимум 3 символа' }),
  email: z.string().email({ message: 'Некорректный адрес электронной почты' }),
  age: z.coerce
    .number()
    .min(18, { message: 'Возраст должен быть не менее 18 лет' })
    .max(120, { message: 'Возраст не может превышать 120 лет' })
    .refine((value) => value !== null && value !== undefined, {
      message: 'Возраст не может быть пустым'
    })
})

export type UserFormData = z.infer<typeof userSchema>
