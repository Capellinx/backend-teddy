import { z } from 'zod'

export const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3333),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().optional(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
})

export type Env = z.infer<typeof envSchema>
