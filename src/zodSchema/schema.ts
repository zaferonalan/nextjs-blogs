import { z } from "zod"

export const postSchema = z.object({
  title: z.string().min(3, "Başlık en az 3 karakter olmalı"),
  content: z.string().min(10, "İçerik en az 10 karakter olmalı"),
  tag: z.string().min(1, "Etiket seçilmelidir"),
})

export type FormInputPostzod = z.infer<typeof postSchema>