// schemas/formValidation.ts
import { z } from 'zod';

export const formSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  idade: z.number().min(18, 'A idade deve ser maior ou igual a 18'),
});

export type FormData = z.infer<typeof formSchema>;
